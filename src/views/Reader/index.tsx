import { Link } from 'solid-app-router'
import { Component, Show, createSignal, onMount } from 'solid-js'
import './reader.scss'

import { getBattery } from '../../util'

const Reader: Component = () => {
  const [isbarMenuShow, setIsbarMenuShow] = createSignal(false)

  const battery = getBattery()

  const showBarAndMenu = () => {
    setIsbarMenuShow(!isbarMenuShow())
  }

  onMount(() => {
    console.log(battery)
  })
  return (
    <div id='Reader'>
      {/* 顶部栏 */}
      <Show when={isbarMenuShow()}>
        <header id='top-bar'>
          <Link href='/'>
            <button>返回</button>
          </Link>
        </header>
      </Show>

      {/* 正文 */}
      <main id='reader-container' onclick={showBarAndMenu}>
        <div id='catelog-title'>
          <p class='catelog'>第三章 崖高人远</p>
        </div>
        <article>
          <section>
            <h4>第一章[节]</h4>
            <p>
              {' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ea magnam animi? Repellendus
              necessitatibus possimus ipsum nam, veritatis voluptatibus quam, nesciunt, numquam illum dolorum aspernatur
              praesentium. Perferendis molestiae iure quibusdam? Amet corrupti voluptas totam ut eligendi ratione odio
              impedit dolore quisquam eum, enim quidem consectetur cumque quasi numquam suscipit molestias? Tempore
              earum at impedit libero praesentium veritatis laborum vel corporis. Voluptatum debitis quidem distinctio
              fuga corporis qui praesentium in provident accusantium sint fugit veritatis corrupti odio voluptate
              laudantium, rerum nam soluta facere eligendi, autem at i
            </p>
          </section>
          <section>
            <h4>章节</h4>
            <p>
              {' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ea magnam animi? Repellendus
              necessitatibus possimus ipsum nam, veritatis voluptatibus quam, nesciunt, numquam illum dolorum aspernatur
              praesentium. Perferendis molestiae iure quibusdam? Amet corrupti voluptas totam ut eligendi ratione odio
              impedit dolore quisquam eum, enim quidem consectetur cumque quasi numquam suscipit molestias? Tempore
              earum at impedit libero praesentium veritatis laborum vel corporis. Voluptatum debitis quidem distinctio
              fuga corporis qui praesentium in provident accusantium sint fugit veritatis corrupti odio voluptate
              laudantium, rerum nam soluta facere eligendi, autem at i
            </p>
          </section>
          <section>
            <h4>章节</h4>
            <p>
              {' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ea magnam animi? Repellendus
              necessitatibus possimus ipsum nam, veritatis voluptatibus quam, nesciunt, numquam illum dolorum aspernatur
              praesentium. Perferendis molestiae iure quibusdam? Amet corrupti voluptas totam ut eligendi ratione odio
              impedit dolore quisquam eum, enim quidem consectetur cumque quasi numquam suscipit molestias? Tempore
              earum at impedit libero praesentium veritatis laborum vel corporis. Voluptatum debitis quidem distinctio
              fuga corporis qui praesentium in provident accusantium sint fugit veritatis corrupti odio voluptate
              laudantium, rerum nam soluta facere eligendi, autem at i
            </p>
          </section>
          <section>
            <h4>章节</h4>
            <p>
              {' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ea magnam animi? Repellendus
              necessitatibus possimus ipsum nam, veritatis voluptatibus quam, nesciunt, numquam illum dolorum aspernatur
              praesentium. Perferendis molestiae iure quibusdam? Amet corrupti voluptas totam ut eligendi ratione odio
              impedit dolore quisquam eum, enim quidem consectetur cumque quasi numquam suscipit molestias? Tempore
              earum at impedit libero praesentium veritatis laborum vel corporis. Voluptatum debitis quidem distinctio
              fuga corporis qui praesentium in provident accusantium sint fugit veritatis corrupti odio voluptate
              laudantium, rerum nam soluta facere eligendi, autem at i
            </p>
          </section>
        </article>
      </main>

      {/* 底部菜单 */}
      <Show when={isbarMenuShow()}>
        <div id='menu-nar'>
          <div id='reader-progress'>
            <div>{'<'}</div>
            <div class='flex-1'>
              <progress value='10' max='100'></progress>
            </div>
            <div>{'>'}</div>
          </div>
          <div class='control-btn'>
            <div>目录</div>
            <div>黑夜</div>
            <div>设置</div>
          </div>
        </div>
      </Show>
    </div>
  )
}

export default Reader
