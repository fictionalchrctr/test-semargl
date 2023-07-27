import React from 'react'

const Menu3 = ({ textArea1, table_2_1 }) => {
  return (
    <div>
      <p>Подменю 3</p>
      <div className=' p-2 my-2 rounded-xl border-solid border-2  border-blue-500'>
        <p>текстовое содержимое из раздела 1 - </p>
        {textArea1 !== '' && (
          <div className='bg-white px-3 py-1 rounded-xl'>{textArea1}</div>
        )}
      </div>
      <div className=' p-2 my-2 rounded-xl border-solid border-2  border-blue-500'>
        <p>
          отфильтрованная, на основании установленных фильтров таблица из
          раздела 2, блока 1
        </p>
        <table className='border-separate border border-slate-500 table-fix'>
          <tbody>
            {table_2_1.map((t) => (
              <tr key={t.id}>
                <td className='border border-slate-600 p-3'>{t.id}</td>
                <td className='border border-slate-600 p-3'>{t.profession}</td>
                <td className='border border-slate-600 p-3'>{t.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Menu3
