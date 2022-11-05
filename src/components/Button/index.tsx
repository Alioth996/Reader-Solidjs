import './index.less'

const SButton = function (props) {
  const { size = 'common', type = '', text = '' } = props

  const btnEmitClick = e => {
    console.log(1)
  }

  return (
    <button
      class='s-button'
      classList={{
        large: size == 'large',
        small: size == 'small',
        common: size == 'common',
        primary: type == 'primary',
        grey: type == 'grep'
      }}
      onclick={btnEmitClick}
    >
      {' '}
      {text} <slot />
    </button>
  )
}

export default SButton
