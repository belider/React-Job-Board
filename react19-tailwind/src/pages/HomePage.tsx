import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
import { Suspense } from 'react';
import Spinner from '../components/Spinner';

// const fetchJobs = async () => {
//     const res = await fetch('/api/jobs?_limit=3');
//     return res.json();
//   }

const fetchJobs = fetch('/api/jobs?_limit=3').then(r => r.json());

const HomePage = () => {


    return (
        <>
            <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />
            <HomeCards />
            <Suspense fallback={<Spinner loading={true} />}>
                <JobListings fetchJobs={fetchJobs} />
            </Suspense>
            <ViewAllJobs />
        </>
    )
}
export default HomePage