import { Link } from 'solid-app-router'
import { Component, For } from 'solid-js'
import AppTitle from '../../components/AppTitle'
import Book from '../../components/Book'
import SButton from '../../components/Button'

import NavBar from '../../components/NavBar'

import './index.scss'
import ReadedRaw from './ReadedRaw'

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
      <main class='flex flex-col'>
        <div class='continue-reader-box flex'>
          <Book book={book} size={'large'} />
          <div class='continue-left flex flex-col item-center'>
            <div class='flex flex-col ' style={{ gap: '5px' }}>
              <p class='font-dark'>天域苍穹</p>
              <p class='font-grey font-small'>56分钟前</p>
            </div>
            <Link href='/reader/0/笑傲江湖'>
              <SButton text={'继续阅读'} type={'primary'} />
            </Link>
          </div>
        </div>

        <div id='readed-history' class='bg-white'>
          <div class='reader-title' style='padding-bottom:10px;'>
            阅读历史
          </div>
          <ul class='flex flex-col'>
            <ReadedRaw />
            <ReadedRaw />
            <ReadedRaw />
          </ul>
        </div>
      </main>
      <div id='footer'>
        <NavBar />
      </div>
    </div>
  )
}
export default Reading
