import { render } from 'solid-js/web'
import './index.css'
import App from './App'

import { loadBookByAO } from './util/parseBook'
loadBookByAO()

render(() => <App />, document.getElementById('root'))
