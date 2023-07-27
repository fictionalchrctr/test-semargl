import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.scss'
import Section1 from './Section1'
import { StoreProvider } from 'store/store'

const container = document.getElementById('app')
const root = createRoot(container)

const App = () => (
  <StoreProvider>
    <div className='mt-10 text-3xl mx-auto max-w-6xl'>
      <Section1 />
      <div>Name: section-1</div>
    </div>
  </StoreProvider>
)
root.render(<App />)
