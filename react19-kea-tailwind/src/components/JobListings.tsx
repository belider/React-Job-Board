import JobListing from './JobListing';
import type { Job } from '../types';

const JobListings = ({ jobs }: { jobs: Job[] }) => {

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {/* {isHomePage ? 'Recent Jobs' : 'Browse Jobs'} */}
          Browse Jobs
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
      </div>
    </section>
  )
}
export default JobListings