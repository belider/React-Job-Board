import { kea, actions, listeners, afterMount, path } from 'kea';
import { loaders } from 'kea-loaders'
import { urlToAction } from 'kea-router'
import type { Job } from '../types'

import type { jobsLogicType } from "./jobsLogicType";

export const jobsLogic = kea<jobsLogicType>([path(["src", "logic", "jobsLogic"]), loaders(() => ({
  jobs: {
    loadJobs: async () => {
      const response = await fetch('/api/jobs')
      return response.json()
    },
  },
  job: {
    loadJob: async (id: string) => {
      const response = await fetch(`/api/jobs/${id}`)
      return response.json()
    },
  },
})), actions({
  addJob: (job: Job) => ({ job }),
  updateJob: (job: Job) => ({ job }),
  deleteJob: (jobId: string) => ({ jobId }),
}), listeners(({ actions }) => ({
  addJob: async ({ job }) => {
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
    // Refresh jobs list after adding
    actions.loadJobs()
  },

  updateJob: async ({ job }) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
    // Refresh jobs list after updating
    actions.loadJobs()
  },

  deleteJob: async ({ jobId }) => {
    await fetch(`/api/jobs/${jobId}`, {
      method: 'DELETE',
    })
    // Refresh jobs list after deleting
    actions.loadJobs()
  },
})), // Load jobs when logic mounts
afterMount(({ actions }) => {
  actions.loadJobs()
}),
urlToAction(({ actions }) => ({
  '/jobs/:id': ({ id }) => {
    actions.loadJob(id as string)
  },
})),
])
