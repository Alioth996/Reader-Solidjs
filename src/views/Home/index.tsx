import { Component, For, createSignal } from 'solid-js'
import { Link } from 'solid-app-router'

import './home.scss'
import NavBar from '../../components/NavBar'
import Book from '../../components/Book'

import { parseBook } from '../../util'
import { getDB, addRecord } from '../../util/db'
// interface Novel {
//   name: string
//   size: number | string
//   type: string
//   author?: string
//   uploadTime?: string
// }

interface Book {
  name: string
  size: number | string
  type: string
  author?: string
  uploadTime?: string
}

// home,bookList
const Home: Component = () => {
  const [bookList, setBookList] = createSignal<Book[]>([
    {
      name: '笑傲江湖',
      size: 36622,
      type: 'txt',
      author: '金庸'
    }
  ])

  // The ref for input[type=file]
  let uploadRef: HTMLInputElement

  // upload novel[.txt,epub] from local
  const uploadNovel = e => {
    const novel = e.target.files[0]

    if (!novel) return

    const { name, size } = novel
    let book: Book = {
      name: name.split('.')[0],
      type: name.split('.')[1],
      size: `${(Number(size) / (1024 * 1024)).toFixed(2)}MB`,
      author: '金庸',
      uploadTime: new Date().toLocaleDateString('zh-cn')
    }

    setBookList([...bookList(), book])
    readBookContent(novel)
  }

  /**
   * @desc FileReader读取小说全部内容
   * @param {*Novel} novel
   */
  const readBookContent = novel => {
    const novelReader = new FileReader()

    novelReader.readAsText(novel, 'utf8')

    novelReader.addEventListener('load', e => {
      const { result } = e.target

      console.log(result)

      if (!result) return

      // 将小说存入IndexdDB
      getDB('yun-book', 'book', ['content']).then(db => {
        addRecord(db, 'book', {
          content: result
        })
      })
      // 解析小说
      parseBook(result)
    })

    novelReader.addEventListener('loadend', e => {
      novelReader.abort()
    })
  }

  // 搜搜小数
  const searchBook = e => {
    if (e.target.value == '') return

    const bookName = e.target.value
    // 搜索小说
    const book: Book = bookList().find(x => {
      // 找到符合的小说
      if (x.name.includes(bookName)) return x
    })
    // 清空输入框,[可选功能]
    // if (book) {
    //   e.target.value = ''
    // }

    // 重新渲染小说列表
    setBookList([book])
  }

  return (
    <>
      <div id='home'>
        <header class='bg-white'>
          <div class='controls-raw'>
            <input type='text' placeholder='搜索' class='text-thin' onchange={searchBook} />
            <input type='file' style='display:none;' accept='.txt,.epub' ref={uploadRef} onChange={uploadNovel} />
            <button onclick={() => uploadRef.click()}>+</button>
          </div>
        </header>
        <main>
          <section>
            <For each={bookList()}>
              {(item, index) => (
                <Link href={`/reader/${index()}/${item.name}`}>
                  <Book book={item} />
                </Link>
              )}
            </For>
          </section>
        </main>
        <NavBar />
      </div>
    </>
  )
}

export default Home
