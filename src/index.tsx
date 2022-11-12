import { render } from 'solid-js/web'
import './index.scss'
import App from './App'

import { IDB } from './util/db'

const db = new IDB('test', 'book')
console.log(db)

db.add({
  author: '老三',
  bookName: '最强赘婿'
})

// console.log(db)

// getDB('book.akexc.com', 'book').then(db => {
//   addRecord(db, 'book', {
//     bookName: '天龙八部',
//     author: '金庸',
//     uploadTime: '2022/12/06',
//     lastReadTime: '2022/10/10 '
//   })
// })

render(() => <App />, document.getElementById('root'))
