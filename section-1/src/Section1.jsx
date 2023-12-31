import React, { useState, useEffect } from 'react'

import { useStore } from 'store/store'

const Section1 = () => {
  const store = useStore()
  const { green, red, blue, setTextArea } = store
  document.title = 'Раздел 1'

  const [inputText, setInputText] = useState('')

  const handleTextArea = (event) => {
    setInputText(event.target.value)
  }

  console.log('inputText', inputText)

  useEffect(() => {
    const loadedInput =
      localStorage.getItem('input1') !== undefined
        ? JSON.parse(localStorage.getItem('input1'))
        : null
    if (loadedInput) {
      setInputText(loadedInput)
    }
  }, [])

  useEffect(() => {
    const json = JSON.stringify(inputText)
    localStorage.setItem('input1', json)
  }, [inputText])

  useEffect(() => {
    setTextArea(inputText)
  }, [inputText])

  return (
    <div>
      <div className='p-2 m-2'>
        <p>Section 1 App</p>
      </div>
      <div className='p-2 m-2'>
        <button
          onClick={red}
          className='bg-red-500 m-auto p-2 rounded-[30px] font-bold cursor-pointer transition hover:text-white hover:bg-[#FF7373] hover:shadow-sm hover:duration-200'
        >
          Красный
        </button>
        <button
          onClick={green}
          className='bg-green-600 m-auto p-2 rounded-[30px] font-bold cursor-pointer transition hover:text-white hover:bg-[#FF7373] hover:shadow-sm hover:duration-200'
        >
          Зелёный
        </button>
        <button
          onClick={blue}
          className='bg-blue-500 m-auto p-2 rounded-[30px] font-bold cursor-pointer transition hover:text-white hover:bg-[#FF7373] hover:shadow-sm hover:duration-200'
        >
          Синий
        </button>
      </div>
      <div className='p-2 m-2'>
        <textarea
          onChange={handleTextArea}
          className='p-2 text-sm   focus:outline-none ring-1  hover:ring-red-500  focus:ring-2 focus:ring-red-500 shadow-sm rounded-lg text-black'
        ></textarea>
      </div>
    </div>
  )
}

export default Section1
