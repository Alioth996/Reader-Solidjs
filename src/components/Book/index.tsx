import './index.less'

export default function (props) {
  const { book, size } = props
  let bookClssList = 'book'
  if (size) bookClssList = `book ${size}`

  console.log(bookClssList)

  return (
    <div class={bookClssList}>
      <p class='book-type-tag'> {book.type} </p>
      <p class='font-large'> {book.name} </p>
      <p style='letter-spacing:3px'>
        <b>{book.author}</b>
      </p>
    </div>
  )
}
