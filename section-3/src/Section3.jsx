import React, { useState } from 'react'

import NavBar from './NavBar'
import Menu1 from './menu/menu1'
import Menu2 from './menu/menu2'
// import Menu2 from './menu/menu2'
import Menu3 from './menu/menu3'

const Section3 = () => {
  document.title = 'Раздел 3'
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <div className='flex '>
      <div className='w-60 h-screen p-5 pt-8 bg-blue-500 '>
        <div
          className={
            ' p-2 mb-2 text-gray-300 flex items-center rounded cursor-pointer transition hover:text-white hover:bg-blue-200 hover:shadow-sm hover:duration-200 ' +
            (toggleState === 1
              ? ' bg-blue-300 duration-200 '
              : 'bg-blue-500 duration-200')
          }
          onClick={() => toggleTab(1)}
        >
          <h1 className=' items-end text-white origin-left font-medium texr-xl duration-300'>
            Menu 1
          </h1>
        </div>
        <div
          className={
            ' p-2 mb-2 text-gray-300 flex items-center rounded cursor-pointer transition hover:text-white hover:bg-blue-200 hover:shadow-sm hover:duration-200 ' +
            (toggleState === 2
              ? ' bg-blue-300 duration-200 '
              : 'bg-blue-500 duration-200')
          }
          onClick={() => toggleTab(2)}
        >
          <h1 className=' items-end text-white origin-left font-medium texr-xl duration-300'>
            Menu 2
          </h1>
        </div>
        <div
          className={
            ' p-2 mb-2 text-gray-300 flex items-center rounded cursor-pointer transition hover:text-white hover:bg-blue-200 hover:shadow-sm hover:duration-200 ' +
            (toggleState === 3
              ? ' bg-blue-300 duration-200 '
              : 'bg-blue-500 duration-200')
          }
          onClick={() => toggleTab(3)}
        >
          <h1 className=' items-end text-white origin-left font-medium texr-xl duration-300'>
            Menu 3
          </h1>
        </div>
      </div>
      <div className='content-tabs3 p-7 flex-1 h-screen  '>
        <div
          className={
            ' p-5 w-max h-max ' + (toggleState === 1 ? ' block' : 'hidden')
          }
        >
          <Menu1 />
        </div>
        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
          <Menu2 />
        </div>
        <div
          className={toggleState === 3 ? 'content  active-content' : 'content'}
        >
          <Menu3 />
        </div>
      </div>
    </div>
  )
}

export default Section3
