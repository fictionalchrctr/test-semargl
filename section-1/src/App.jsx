import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import Section1 from './Section1'
import { StoreProvider } from 'store/store'

const App = () => (
  <StoreProvider>
    <div className='mt-10 text-3xl mx-auto max-w-6xl'>
      <Section1 />
      <div>Name: section-1</div>
    </div>
  </StoreProvider>
)
ReactDOM.render(<App />, document.getElementById('app'))
