import { Suspense, useMemo } from "react";
import Spinner from "../components/Spinner";
import JobListings from "../components/JobListings"
// import { useLoaderData } from "react-router";// const fetchJobs = fetch('/api/jobs').then(r => r.json());

const JobsPage = () => {
  // const jobs = useLoaderData();

  const fetchJobs = useMemo(() => fetch('/api/jobs').then(r => r.json()), []);

  return (
    <section>
      <Suspense fallback={<Spinner loading={true} />}>
        <JobListings fetchJobs={fetchJobs} /> 
      </Suspense>
    </section>
  )
}
export default JobsPage