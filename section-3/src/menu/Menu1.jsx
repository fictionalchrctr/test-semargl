import React from 'react'

const Menu1 = ({ selector_2_1, toDosList }) => {
  console.log('selector_2_1', selector_2_1)
  console.log('typeof(selector_2_1)', typeof selector_2_1)
  return (
    <div>
      <p>Подменю 1</p>
      <div className=' p-2 my-2 rounded-xl border-solid border-2  border-blue-500'>
        <p className=''>результат выбора селектора из раздела 2, блока 1 - </p>
        {selector_2_1 !== ' ' && (
          <div className='bg-white px-3 py-1 rounded-xl'>{selector_2_1}</div>
        )}
      </div>
      <div className=' p-2 my-2 rounded-xl border-solid border-2  border-blue-500'>
        <p>текущий лист ToDo из раздела 2, блока 2</p>
        {toDosList.map((todo) => (
          <div key={todo.id} className='flex flex-col'>
            <div className='text-xl mb-4 flex rounded-xl items-center border-solid border-2  border-gray-200 '>
              <div className='mx-2'>{todo.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu1
