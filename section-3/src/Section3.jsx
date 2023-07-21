import React, { useState } from 'react'
import { useStore } from 'store/store'

// import NavBar from './NavBar'
import Menu1 from './menu/menu1'
import Menu2 from './menu/menu2'
import Menu3 from './menu/menu3'

// import color

const Section3 = () => {
  const store = useStore()
  const { color, selector_2_1, currentToDo, textArea1 } = store
  document.title = 'Раздел 3'
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className='flex '>
      <div className={color + '-600 w-60 h-screen p-5 pt-8'}>
        <div
          className={
            ` p-2 mb-2 text-gray-300 flex items-center rounded cursor-pointer transition  hover:${color}-400  hover:text-white hover:shadow-sm hover:duration-200 ` +
            (toggleState === 1
              ? color + '-300 duration-200 '
              : color + '-500 duration-200')
          }
          onClick={() => toggleTab(1)}
        >
          <h1 className=' items-end text-white origin-left font-medium texr-xl duration-300'>
            Menu 1
          </h1>
        </div>
        <div
          className={
            ` p-2 mb-2 text-gray-300 flex items-center rounded cursor-pointer transition  hover:${color}-400  hover:text-white hover:shadow-sm hover:duration-200 ` +
            (toggleState === 2
              ? color + '-300 duration-200 '
              : color + '-500 duration-200')
          }
          onClick={() => toggleTab(2)}
        >
          <h1 className=' items-end text-white origin-left font-medium texr-xl duration-300'>
            Menu 2
          </h1>
        </div>
        <div
          className={
            ` p-2 mb-2 text-gray-300 flex items-center rounded cursor-pointer transition  hover:${color}-400  hover:text-white hover:shadow-sm hover:duration-200 ` +
            (toggleState === 3
              ? color + '-300 duration-200 '
              : color + '-500 duration-200')
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
          <Menu1 selector_2_1={selector_2_1} toDosList={currentToDo} />
        </div>
        <div
          className={
            ' p-5 w-max h-max ' + (toggleState === 2 ? ' block' : 'hidden')
          }
        >
          <Menu2 />
        </div>
        <div
          className={
            ' p-5 w-max h-max ' + (toggleState === 3 ? ' block' : 'hidden')
          }
        >
          <Menu3 textArea1={textArea1} />
        </div>
      </div>
    </div>
  )
}

export default Section3
