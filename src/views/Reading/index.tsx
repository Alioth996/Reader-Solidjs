import { Component } from 'solid-js'
import AppTitle from '../../components/AppTitle'

import NavBar from '../../components/NavBar'

import './index.less'

const Reading: Component = () => {
  return (
    <div id='reading'>
      <AppTitle text={'阅读中'} />
      <main></main>
      <NavBar />
    </div>
  )
}
export default Reading
