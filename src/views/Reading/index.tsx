import { Component } from 'solid-js'
import AppTitle from '../../components/AppTitle'
import Book from '../../components/Book'

import NavBar from '../../components/NavBar'

import './index.less'

interface Book {
  name: string
  size: number | string
  type: string
  author?: string
  uploadTime?: string
}

const book: Book = {
  name: '笑傲江湖',
  size: 36622,
  type: 'txt',
  author: '金庸'
}

const Reading: Component = () => {
  return (
    <div id='reading'>
      <AppTitle text={'阅读中'} />
      <main>
        <div class='continue-reader-box'>
          <Book book={book} size={'large'} />
        </div>
      </main>
      <NavBar />
    </div>
  )
}
export default Reading
