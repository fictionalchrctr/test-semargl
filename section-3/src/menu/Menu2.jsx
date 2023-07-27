import React, { useState } from 'react'

const Menu2 = () => {
  const plus = (a, b) => a + b
  const minus = (a, b) => a - b
  const multiply = (a, b) => a * b
  const divide = (a, b) => a / b

  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')
  const [simbol, setSimbol] = useState('+')
  const [action, setAction] = useState(() => plus)

  const handleChange = (setter) => {
    return (event) => {
      const value = event.target.value
      setter(value ? parseFloat(value) : 0)
    }
  }

  const handleClick = (action, simbol) => {
    return () => {
      setAction(() => action)
      setSimbol(simbol)
    }
  }

  const handleReset = () => {
    return () => {
      setOne('')
      setTwo('')
      setAction()
    }
  }

  return (
    <div className='calculator max-w-xs rounded-2xl overflow-hidden shadow'>
      <p>Подменю 2</p>
      <div className='operators flex '>
        <button
          className='flex-[1_1_0%] border-none appearance-none outline-none bg-blue-200 p-7 text-2xl cursor-pointer transition delay-400 hover:opacity-90 '
          onClick={handleClick(plus, '+')}
        >
          +
        </button>
        <button
          className='flex-[1_1_0%] border-none appearance-none outline-none bg-blue-200 p-7 text-2xl cursor-pointer transition delay-400 hover:opacity-90 '
          onClick={handleClick(minus, '-')}
        >
          -
        </button>
        <button
          className='flex-[1_1_0%] border-none appearance-none outline-none bg-blue-200 p-7 text-2xl cursor-pointer transition delay-400 hover:opacity-90 '
          onClick={handleClick(multiply, '*')}
        >
          *
        </button>
        <button
          className='flex-[1_1_0%] border-none appearance-none outline-none bg-blue-200 p-7 text-2xl cursor-pointer transition delay-400 hover:opacity-90 '
          onClick={handleClick(divide, '/')}
        >
          /
        </button>
        <button
          className='flex-[1_1_0%] border-none appearance-none outline-none bg-blue-200 p-7 text-2xl cursor-pointer transition delay-400 hover:opacity-90 '
          onClick={handleReset()}
        >
          C
        </button>
      </div>
      <div className=' flex items-center'>
        <input
          className='p-2 m-2 w-24 text-sm   focus:outline-none ring-1  hover:ring-red-500  focus:ring-2 focus:ring-red-500 shadow-sm rounded-lg text-black'
          type='number'
          value={one}
          onChange={handleChange(setOne)}
        />
        <span> {simbol} </span>
        <input
          className='p-2 m-2 w-24 text-sm   focus:outline-none ring-1  hover:ring-red-500  focus:ring-2 focus:ring-red-500 shadow-sm rounded-lg text-black'
          type='number'
          value={two}
          onChange={handleChange(setTwo)}
        />
        <span> = {action ? action(one, two) : ''}</span>
      </div>
    </div>
  )
}

export default Menu2
