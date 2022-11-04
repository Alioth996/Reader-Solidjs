import { Link } from 'solid-app-router'
import { Component, Show, createSignal, onMount } from 'solid-js'
import './reader.less'

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
        <article></article>
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
