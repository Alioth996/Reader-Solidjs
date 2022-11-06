import { Component, For } from 'solid-js'

import { Link } from 'solid-app-router'

import './index.scss'

let navLinks = [
  {
    content: '阅读中',
    to: '/reading'
  },
  {
    content: '书架',
    to: '/'
  },
  {
    content: '关于',
    to: '/about'
  }
]

const NavBar: Component = props => {
  return (
    <footer>
      <For each={navLinks}>
        {link => (
          <Link href={link.to} class='text-primary'>
            {' '}
            {link.content}{' '}
          </Link>
        )}
      </For>
    </footer>
  )
}
export default NavBar
