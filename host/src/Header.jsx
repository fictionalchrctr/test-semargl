import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex bg-blue-700 text-white font-bold text-3xl p-5'>
      <Link to='/section-1' className='mx-4'>
        Section 1
      </Link>
      <Link to='/section-2' className='mx-4'>
        Section 2
      </Link>
      <Link to='/section-3' className='mx-4'>
        Section 3
      </Link>
    </header>
  )
}

export default Header
