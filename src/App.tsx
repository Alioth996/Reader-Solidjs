import { Component, lazy } from 'solid-js'
import { Router, Route } from 'solid-app-router'

import Nav from './components/NavBar'
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
    path: '*all',
    component: lazy(() => import('./views/NotFound'))
  }
]

const App: Component = () => {
  return (
    <Router routes={routes}>
      {/* <Nav /> */}
      <Route />
    </Router>
  )
}

export default App
