import { Component, For } from 'solid-js'

import { Link } from 'solid-app-router'

import './index.less'

interface Novel {
  name: string
  size: number
  type: string
  author?: string
  uploadTime?: string
}

let novelList: Novel[] = [
  {
    name: '天龙八部',
    size: 3662,
    type: 'txt',
    author: '金庸',
    uploadTime: new Date().toLocaleDateString('zh-cn')
  },
  {
    name: '笑傲江湖',
    size: 4662,
    type: 'txt',
    author: '金庸',
    uploadTime: new Date().toLocaleDateString('zh-cn')
  },
  {
    name: '诛仙',
    size: 16662,
    type: 'txt',
    author: '萧鼎',
    uploadTime: new Date().toLocaleDateString('zh-cn')
  },
  {
    name: '天龙八部',
    size: 3662,
    type: 'txt',
    author: '金庸',
    uploadTime: new Date().toLocaleDateString('zh-cn')
  },
  {
    name: '笑傲江湖',
    size: 4662,
    type: 'txt',
    author: '金庸',
    uploadTime: new Date().toLocaleDateString('zh-cn')
  },
  {
    name: '诛仙',
    size: 16662,
    type: 'txt',
    author: '萧鼎',
    uploadTime: new Date().toLocaleDateString('zh-cn')
  }
]

// home,bookList
const Home: Component = () => {
  // The ref for input[type=file]
  let uploadRef: HTMLInputElement

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

  // upload novel[.txt,epub] from local
  const uploadNovel = e => {
    const novel: Novel = e.target.files[0]

    if (!novel) return

    novel.uploadTime = new Date().toLocaleDateString('zh-cn')

    paareNovel(novel)
  }

  /**
   * @desc 解析小说目录,名字,大小,文件类型,内容
   * @param {*Novel} novel
   */
  const paareNovel = (novel: Novel) => {
    console.log(novel)
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
            <For each={novelList}>
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
        <footer>
          <For each={navLinks}>{link => <Link href={link.to}> {link.content} </Link>}</For>
        </footer>
      </div>
    </>
  )
}

export default Home
