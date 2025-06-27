import { useLoaderData, useNavigate } from "react-router";
import type { Job } from "../types/job";
import JobForm from "../components/JobForm";
import { toast } from "react-toastify";

const EditJobPage = ({ updateJob }: { updateJob: (job: Job) => void }) => {
    const job = useLoaderData() as Job;
    const navigate = useNavigate();

    const onSubmit = (newJob: Job) => {
        updateJob(newJob);
        toast.success('Job listing updated successfully');
        return navigate(`/jobs/${job.id}`);
    }

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div
                    className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                >
                    <h2 className="text-3xl text-center font-semibold mb-6">Edit Job</h2>
                    <JobForm onSubmit={onSubmit} buttonText="Save Changes" job={job} />
                </div>
            </div>
        </section>
    )
}
export default EditJobPage