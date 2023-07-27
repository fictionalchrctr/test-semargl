import React from 'react'
import { createRoot } from 'react-dom/client'

import { StoreProvider } from 'store/store'

import './index.css'
import Section3 from './Section3'

const container = document.getElementById('app')
const root = createRoot(container)

const App = () => (
  <StoreProvider>
    <div className='flex mt-10 text-3xl mx-auto max-w-6xl'>
      <Section3 />
    </div>
  </StoreProvider>
)
root.render(<App />)
