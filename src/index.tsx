import { render } from 'solid-js/web'
import './index.less'
import App from './App'

// import { loadBook } from './util/parseBook'
// loadBook()

import { getBattery } from './util/getBattery'
getBattery()
render(() => <App />, document.getElementById('root'))
