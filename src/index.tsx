import { render } from 'solid-js/web'
import './index.css'
import App from './App'

import { loadBook } from './util/parseBook'
loadBook()

render(() => <App />, document.getElementById('root'))
