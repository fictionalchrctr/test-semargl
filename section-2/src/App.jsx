import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import Section2 from './Section2'

const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <Section2 />
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
