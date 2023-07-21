import React from 'react'

const Menu3 = ({ textArea1 }) => {
  return (
    <div>
      <p>Подменю 3</p>
      <div className=' p-2 my-2 rounded-xl border-solid border-2  border-blue-500'>
        <p>текстовое содержимое из раздела 1 - </p>
        {textArea1 !== '' && (
          <div className='bg-white px-3 py-1 rounded-xl'>{textArea1}</div>
        )}
      </div>
    </div>
  )
}

export default Menu3
