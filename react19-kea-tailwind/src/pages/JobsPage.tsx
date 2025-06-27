import { useValues } from 'kea'
import { jobsLogic } from '../logic/jobsLogic'
import Spinner from "../components/Spinner";
import JobListings from '../components/JobListings';

const JobsPage = () => {
  const { jobs, jobsLoading } = useValues(jobsLogic)
  // const { loadJobs } = useActions(jobsLogic)

  if (jobsLoading) return <Spinner loading={jobsLoading} />

  return (
    <section>
      <JobListings jobs={jobs} />
    </section>
  )
}

export default JobsPage