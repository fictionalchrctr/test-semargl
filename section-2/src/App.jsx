import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { StoreProvider } from 'store/store'
import Section2 from './Section2'

const App = () => (
  <StoreProvider>
    <div className='mt-10 text-3xl mx-auto max-w-6xl'>
      <Section2 />
    </div>
  </StoreProvider>
)
ReactDOM.render(<App />, document.getElementById('app'))
