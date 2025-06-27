import { kea, actions, reducers, path } from 'kea';
import { urlToAction } from 'kea-router'
import { lazy } from 'react'

import type { sceneLogicType } from "./sceneLogicType";

// Lazy load pages for better performance
export const scenes = {
  error404: lazy(() => import('../pages/NotFound')),
  home: lazy(() => import('../pages/HomePage')),
  jobs: lazy(() => import('../pages/JobsPage')),
  job: lazy(() => import('../pages/JobPage')),
  addJob: lazy(() => import('../pages/AddJobPage')),
  editJob: lazy(() => import('../pages/EditJobPage')),
}

export const routes = {
  '/': 'home',
  '/jobs': 'jobs',
  '/jobs/:id': 'job',
  '/add-job': 'addJob',
  '/edit-job/:id': 'editJob',
}

export interface SceneParams {
  id?: string
  [key: string]: string | undefined
}

export const sceneLogic = kea<sceneLogicType>([
  path(["src", "logic", "sceneLogic"]), 
  
  actions({
    setScene: (scene, params = {}) => ({ scene, params }),
  }), 
  
  reducers({
    scene: [
      'home' as string,
      {
        setScene: (_, { scene }) => scene,
      },
    ],
    params: [
      {} as SceneParams,
      {
        setScene: (_, { params }) => params || {},
      },
    ],
  }), 
  
  urlToAction(({ actions }) => {
    return Object.fromEntries(
      Object.entries(routes).map(([path, scene]) => {
        return [path, (params: SceneParams) => actions.setScene(scene, params)]
      })
    )
  })
])