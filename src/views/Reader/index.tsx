import { Component } from 'solid-js'
import AppTitle from '../../components/AppTitle'
import NavBar from '../../components/NavBar'
const Reader: Component = () => {
  return (
    <div id='Reader'>
      <AppTitle text={'阅读中'} />
      <main id='reader-container'>
        <article></article>
      </main>

      <NavBar />
    </div>
  )
}

export default Reader
