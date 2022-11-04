import { render } from 'solid-js/web'
import './index.less'
import App from './App'

import getBattery from './util/Battery'

console.log(getBattery())

render(() => <App />, document.getElementById('root'))
