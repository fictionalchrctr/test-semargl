import React from 'react'

const Section1 = () => {
  document.title = 'Раздел 1'
  return (
    <div>
      <div className='p-2 m-2'>
        <p>Section 1 App</p>
      </div>
      <div>
        <button className='bg-red-500 m-auto p-2 rounded-[30px] font-bold cursor-pointer transition hover:text-white hover:bg-[#FF7373] hover:shadow-sm hover:duration-200'>
          Красный
        </button>
        <button className='bg-green-500 m-auto p-2 rounded-[30px] font-bold cursor-pointer transition hover:text-white hover:bg-[#FF7373] hover:shadow-sm hover:duration-200'>
          Зелёный
        </button>
        <button className='bg-blue-500 m-auto p-2 rounded-[30px] font-bold cursor-pointer transition hover:text-white hover:bg-[#FF7373] hover:shadow-sm hover:duration-200'>
          Синий
        </button>
      </div>
      <div className='my-2'>
        <input className='px-2 py-2 text-sm   focus:outline-none ring-1  hover:ring-red-500  focus:ring-2 focus:ring-red-500 shadow-sm rounded-lg text-black'></input>
      </div>
    </div>
  )
}

export default Section1
