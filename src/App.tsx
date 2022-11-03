import { Component, lazy } from 'solid-js'
import { Router, Route } from 'solid-app-router'

const routes = [
  {
    path: '/',
    component: lazy(() => import('./views/Home/index'))
  },
  {
    path: '/about',
    component: lazy(() => import('./views/About/index'))
  },
  {
    path: '/reading',
    component: lazy(() => import('./views/Reading/index'))
  },
  {
    path: '/reader/:id/:name',
    component: lazy(() => import('./views/Reader/index'))
  },
  {
    path: '*all',
    component: lazy(() => import('./views/NotFound'))
  }
]

const App: Component = () => {
  return (
    <Router routes={routes}>
      <Route />
    </Router>
  )
}

export default App
