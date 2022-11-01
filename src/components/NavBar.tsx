import { Component } from 'solid-js'
import { Link } from 'solid-app-router'

const Nav: Component = () => {
  return (
    <div>
      <p>
        {' '}
        <Link href='/'>主页</Link>
      </p>
      <p>
        <Link href='/about'>关于</Link>
      </p>{' '}
    </div>
  )
}
export default Nav
