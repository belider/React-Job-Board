import { A } from 'kea-router'

const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
    <A
        href="/jobs"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >
        View All Jobs
    </A>
    </section>
  )
}
export default ViewAllJobs