import { A } from 'kea-router'
import { useActions, useValues } from 'kea'
import { router } from 'kea-router'
import { toast } from "react-toastify"
import { ArrowLeft, MapPin } from "lucide-react"
import { jobsLogic } from '../logic/jobsLogic'

const JobPage = () => {
    const { push } = useActions(router)
    const { deleteJob } = useActions(jobsLogic)
    const { job, jobLoading } = useValues(jobsLogic)

    if (jobLoading) return <div>Loading...</div>
    if (!job) return <div>Job not found</div>

    const handleDelete = (jobId: string) => {
        const confirm = window.confirm('Are you sure you want to delete this job listing?');
        if (!confirm) return;

        deleteJob(jobId);
        toast.success('Job listing deleted successfully');
        return push('/jobs');
    };
    
    return (
    <>
        <section>
        <div className="container m-auto py-6 px-6">
            <A
            href="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
            >
            <ArrowLeft className="mr-2" /> Back to Job Listings
            </A>
        </div>
        </section>

        <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-6">
            <main>
                <div
                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                >
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">
                    {job.title}
                </h1>
                <div
                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                >
                    <MapPin className="text-lg text-orange-700 mr-2" />
                    <p className="text-orange-700">{job.location}</p>
                </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                    Job Description
                </h3>

                <p className="mb-4">
                We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.
                </p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                <p className="mb-4">$70k - $80K / Year</p>
                </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
                <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{job.company.name}</h2>

                <p className="my-2">
                    {job.company.description}
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                    {job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                    {job.company.contactPhone}
                </p>
                </div>

                {/* <!-- Manage --> */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <A
                    href={`/edit-job/${job.id}`}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                    Edit Job
                </A>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    onClick={() => handleDelete(job.id)}
                >
                    Delete Job
                </button>
                </div>
            </aside>
            </div>
        </div>
        </section>
    </>
    );
};

export default JobPage;