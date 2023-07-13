import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import Section3 from './Section3'

const App = () => (
  <div className='flex mt-10 text-3xl mx-auto max-w-6xl'>
    <Section3 />
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
