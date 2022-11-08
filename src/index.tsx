import { render } from 'solid-js/web'
import './index.scss'
import App from './App'

// import { getDB, addRecord } from './util/db'

// getDB('book.akexc.com', 'book').then(db => {
//   addRecord(db, 'book', {
//     bookName: '天龙八部',
//     author: '金庸',
//     uploadTime: '2022/12/06',
//     lastReadTime: '2022/10/10 '
//   })
// })

render(() => <App />, document.getElementById('root'))
