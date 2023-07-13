import React, { useState } from 'react'
import './index.css'
import ToDoList from './units/toDoList'
import DragDrop from './units/dragDrop'
import Unit1 from './units/unit1'
// import ToDos from './toDos'

const Section2 = () => {
  document.title = 'Раздел 2'

  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className='container'>
      <div className='bloc-tabs'>
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          Block 1
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          Block 2
        </button>
        <button
          className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(3)}
        >
          Block 3
        </button>
      </div>

      <div className='content-tabs'>
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
          <h2>Content 1</h2>
          <hr />
          <Unit1 />
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
          <h2>Content 2</h2>
          <hr />
          <ToDoList />
          {/* <ToDos /> */}
        </div>

        <div
          className={toggleState === 3 ? 'content  active-content' : 'content'}
        >
          <h2>Content 3</h2>
          <hr />
          <DragDrop />
        </div>
      </div>
    </div>
  )
}

export default Section2
