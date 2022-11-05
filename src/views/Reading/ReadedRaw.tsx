import Book from '../../components/Book'
import SButton from '../../components/Button'

export default function (props) {
  return (
    <li class='reader-row flex item-center space-between'>
      <Book size='small' />
      <div class='book-meta flex flex-col item-center' style={{ gap: '6px', flex: 1 }}>
        <div class='font-dark'>天龙八部</div>
        <p class='font-grey font-small'> {new Date().toLocaleDateString('zh-cn')}</p>
      </div>
      <SButton text={'继续'} type='primary' size='small' />
    </li>
  )
}
