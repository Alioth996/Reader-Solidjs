import './index.scss'

export default function (props) {
  const { book = { name: '', author: '', type: 'txt' }, size } = props
  // let bookClssList = 'book'
  // if (size) bookClssList = `book ${size}`

  return (
    <div class='book' classList={{ 'book-large': size == 'large', 'book-small': size == 'small' }}>
      <p class='book-type-tag'> {book.type} </p>
      <p class='text-center'> {book.name} </p>
      <p style='letter-spacing:3px'>
        <b>{book.author}</b>
      </p>
    </div>
  )
}
