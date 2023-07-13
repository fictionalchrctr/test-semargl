import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' w-48 h-screen bg-blue-700 text-white'>
      <Link to='/section-3/menu1' className=''>
        <p>Menu 1</p>
      </Link>
      <Link to='/section-3/menu2' className=''>
        <p>Menu 2</p>
      </Link>
      <Link to='/section-3/menu3' className=''>
        <p>Menu 3</p>
      </Link>
    </div>
  )
}
export default NavBar
