import { Component, For, createSignal } from 'solid-js'

import './index.less'
import NavBar from '../../components/NavBar'

import parseBook from '../../util/parseBook'

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
      size: `${Math.ceil(Number(size) / 1024)} MB`,
      author: '金庸',
      uploadTime: new Date().toLocaleDateString('zh-cn')
    }

    // console.log(book)

    setBookList([...bookList(), book])

    readBook(novel)
  }

  /**
   * @desc 读取小说内容
   * @param {*Novel} novel
   */
  const readBook = novel => {
    const novelReader = new FileReader()

    novelReader.readAsText(novel)

    novelReader.addEventListener('load', e => {
      const { result } = e.target

      if (!result) return
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
                <div class='book' onclick={() => console.log(index())}>
                  <p class='book-type-tag'> {item.type} </p>
                  <p class='font-large'> {item.name} </p>
                  <p style='letter-spacing:3px'>
                    <b>{item.author}</b>
                  </p>
                </div>
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
