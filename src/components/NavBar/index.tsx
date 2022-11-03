import { Component, For } from 'solid-js'

import { Link } from 'solid-app-router'

import './index.less'

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
      <For each={navLinks}>{link => <Link href={link.to}> {link.content} </Link>}</For>
    </footer>
  )
}
export default NavBar
