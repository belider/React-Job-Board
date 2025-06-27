import { kea, path, actions } from 'kea';
import { actionToUrl } from 'kea-router'

import type { routerLogicType } from "./routerLogicType";

export const routerLogic = kea<routerLogicType>([
  path(["src", "logic", "routerLogic"]), 
  
  actions({
    goToHome: true,
    goToJobs: true,
    goToAddJob: true,
    goToJob: (id) => ({ id }),
    goToEditJob: (id) => ({ id }),
  }), 
  
  actionToUrl({
    goToHome: () => '/',
    goToJobs: () => '/jobs',
    goToAddJob: () => '/add-job',
    goToJob: ({ id }) => `/jobs/${id}`,
    goToEditJob: ({ id }) => `/edit-job/${id}`,
  })
])