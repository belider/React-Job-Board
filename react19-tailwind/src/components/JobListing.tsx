import { useState } from 'react';
import { Link } from 'react-router';
import { Map } from 'lucide-react'

type JobListingProps = {
    job: {
        id: string
        title: string
        type: string
        description: string
        location: string
        salary: string
    }
}

const JobListing = ({ job }: JobListingProps) => {
    const [setshowFullDescription, setsetshowFullDescription] = useState(false);

    let description = job.description;
    if (!setshowFullDescription) {
        description = description.substring(0, 100) + '...';
    }

    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{job.type}</div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                </div>

                <div className="mb-5">
                    {description}
                </div>

                <button className="text-indigo-500 mb-5 hover:text-indigo-600" onClick={() => setsetshowFullDescription((prev) => !prev)}>
                    {setshowFullDescription ? 'Less' : 'More'}
                </button>

                <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        {/* <i className="fa-solid fa-location-dot text-lg"></i> */}
                        <Map className='inline mb-1 mr-1' size={20} />
                        {job.location}
                    </div>
                    <Link
                        to={`/jobs/${job.id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default JobListing