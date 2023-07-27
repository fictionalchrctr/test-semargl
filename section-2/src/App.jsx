import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { StoreProvider } from 'store/store'
import Section2 from './Section2'

const container = document.getElementById('app')
const root = createRoot(container)

const App = () => (
  <StoreProvider>
    <div className='mt-10 text-3xl mx-auto max-w-6xl'>
      <Section2 />
    </div>
  </StoreProvider>
)
root.render(<App />)
