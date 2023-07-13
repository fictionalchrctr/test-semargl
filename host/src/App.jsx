import React from 'react'
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import Section1 from 'section_1/Section1'
import Section2 from 'section_2/Section2'
import Section3 from 'section_3/Section3'

import './index.css'
import Header from './Header'

const container = document.getElementById('app')
const root = createRoot(container)

const App = () => (
  <BrowserRouter>
    <div className=' mx-auto max-w-6xl'>
      <Header />
      {/* <div>Name: host</div> */}
      <Routes>
        <Route path='section-1' element={<Section1 />} />
        <Route path='section-2' element={<Section2 />} />
        <Route path='section-3' element={<Section3 />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  </BrowserRouter>
)

root.render(<App />)
