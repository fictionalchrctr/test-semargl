import React from 'react'
import ReactDOM from 'react-dom'

import { StoreProvider } from 'store/store'

import './index.css'
import Section3 from './Section3'

const App = () => (
  <StoreProvider>
    <div className='flex mt-10 text-3xl mx-auto max-w-6xl'>
      <Section3 />
    </div>
  </StoreProvider>
)
ReactDOM.render(<App />, document.getElementById('app'))
