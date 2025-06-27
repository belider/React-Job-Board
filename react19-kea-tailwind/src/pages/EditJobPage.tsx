import { useActions, useValues } from 'kea'
import { jobsLogic } from '../logic/jobsLogic'
import { router } from 'kea-router'
import type { Job } from "../types";
import JobForm from "../components/JobForm";
import { toast } from "react-toastify";

const EditJobPage = () => {
    const { job } = useValues(jobsLogic)
    const { updateJob } = useActions(jobsLogic)
    const { push } = useActions(router);

    const onSubmit = (newJob: Job) => {
        updateJob(newJob);
        toast.success('Job listing updated successfully');
        return push(`/jobs/${job.id}`);
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