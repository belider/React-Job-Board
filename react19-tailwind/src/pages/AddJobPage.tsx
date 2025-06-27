import type { Job } from "../types/job";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import JobForm from "../components/JobForm";

const AddJobPage = ({ addJob }: { addJob: (job: Job) => void }) => {
    const navigate = useNavigate();

    const onSubmit = (newJob: Job) => {
        addJob(newJob);
        toast.success('Job listing added successfully');
        return navigate('/jobs');
    }

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div
                    className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                >
                    <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>
                    <JobForm onSubmit={onSubmit} buttonText="Add Job" />
                </div>
            </div>
        </section>
    )
}
export default AddJobPage;