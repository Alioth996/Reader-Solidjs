import { Component, For, createSignal } from 'solid-js'

import { Link } from 'solid-app-router'

import './home.less'
import NavBar from '../../components/NavBar'

import { parseBook } from '../../util'

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

    console.log(book)

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

      if (!result) return
      // 解析小说
      parseBook(result)
    })

    novelReader.addEventListener('loadend', e => {
      novelReader.abort()
    })
  }

  return (
    <>
      <div id='home'>
        <header>
          <div class='controls-raw'>
            <input type='text' placeholder='搜索' />
            <input type='file' style='display:none;' accept='.txt,.epub' ref={uploadRef} onChange={uploadNovel} />
            <button onclick={() => uploadRef.click()}>+</button>
          </div>
        </header>
        <main>
          <section>
            <For each={bookList()}>
              {(item, index) => (
                <Link href={`/reader/${index()}/${item.name}`}>
                  <div class='book' onclick={() => console.log(index())}>
                    <p class='book-type-tag'> {item.type} </p>
                    <p class='font-large'> {item.name} </p>
                    <p style='letter-spacing:3px'>
                      <b>{item.author}</b>
                    </p>
                  </div>
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
