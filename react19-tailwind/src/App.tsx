import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';

import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';
import AddJobPage from './pages/AddJobPage';
import JobPage from './pages/JobPage';
import EditJobPage from './pages/EditJobPage';

import type { Job } from './types/job';
import type { LoaderFunctionArgs } from 'react-router';

// Move functions outside component to prevent re-creation
const addJob = async (job: Job) => {
  await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  return;
};

const updateJob = async (job: Job) => {
  await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  return;
};

const deleteJob = async (jobId: string) => {
  await fetch(`/api/jobs/${jobId}`, {
    method: 'DELETE',
  });
  return;
};

const jobsLoader = async () => {
  return fetch('/api/jobs').then(r => r.json());
  // const res = await fetch("/api/jobs")
  // console.log('jobsLoader called', res)
  // return res.json()
  // const data: Job[] = await res.json()
  // return data
}

const jobLoader = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(`/api/jobs/${params.id}`)
  const data: Job = await res.json()
  return data
};

// Create router outside component to prevent re-creation
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="jobs" element={<JobsPage />} loader={jobsLoader} />
      <Route path="add-job" element={<AddJobPage addJob={addJob} />} />
      <Route path="edit-job/:id" element={<EditJobPage updateJob={updateJob} />} loader={jobLoader} />
      <Route path="jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
);

const App = () => {
  return (
    <RouterProvider 
      router={router} 
    />
  );
}

export default App
