import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
import { Suspense } from 'react';
import Spinner from '../components/Spinner';
import { useValues } from 'kea';
import { jobsLogic } from '../logic/jobsLogic';

const HomePage = () => {
    const { jobs, jobsLoading } = useValues(jobsLogic);

    return (
        <>
            <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />
            <HomeCards />
            <Suspense fallback={<Spinner loading={true} />}>
                {!jobsLoading && jobs && <JobListings jobs={jobs.slice(0, 3)} />}
            </Suspense>
            <ViewAllJobs />
        </>
    )
}
export default HomePage