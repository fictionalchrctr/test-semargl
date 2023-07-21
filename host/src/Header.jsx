import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex bg-blue-700 text-white font-bold text-3xl  '>
      <Link
        to='/section-1'
        className='p-5 m-auto hover:bg-blue-400 focus:bg-blue-300'
      >
        <p className='m-auto'>Section 1</p>
      </Link>
      <Link
        to='/section-2'
        className='p-5 m-auto hover:bg-blue-400 focus:bg-blue-300'
      >
        <p>Section 2</p>
      </Link>
      <Link
        to='/section-3'
        className='p-5 m-auto hover:bg-blue-400 focus:bg-blue-300'
      >
        <p>Section 3</p>
      </Link>
    </header>
  )
}

export default Header
