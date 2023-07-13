import React, { useState } from 'react'

const Unit1 = () => {
  const data = [
    {
      id: '1',
      profession: 'Developer',
      name: 'Linus Torvalds',
    },
    {
      id: '2',
      profession: 'Lawyer',
      name: 'Saul Goodman',
    },
    {
      id: '3',
      profession: 'Developer',
      name: 'Bill Gates',
    },
    {
      id: '4',
      profession: 'Driver',
      name: 'Niki Lauda',
    },
    {
      id: '5',
      profession: 'Lawyer',
      name: 'Tom Hagen',
    },
    {
      id: '6',
      profession: 'Driver',
      name: 'Kimmi Raikonen',
    },
  ]

  const professions = [
    { id: 'c1', selector: 'Developer' },
    { id: 'c2', selector: 'Lawyer' },
    { id: 'c3', selector: 'Driver' },
  ]

  const [searchQuery, setSerarchQuery] = useState('')
  const [selectedProf, setSelectedProf] = useState()

  const handleProfessionSelect = (item) => {
    if (searchQuery !== '') setSerarchQuery('')
    setSelectedProf(item)
  }

  const handleSearchQuery = (event) => {
    setSelectedProf(undefined)
    setSerarchQuery(event.target.value)
  }

  function filterData(data) {
    const filteredData = searchQuery
      ? data.filter(
          (d) => d.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        )
      : selectedProf
      ? data.filter((d) => d.profession === selectedProf.selector)
      : data
    return filteredData
  }

  const filteredData = filterData(data)
  const clearFilter = () => {
    setSelectedProf()
  }

  return (
    <div className='flex flex-row justify-between'>
      <ul className='flex flex-col '>
        <button
          onClick={clearFilter}
          className='bg-gray-200 px-5 py-3 rounded-xl mb-2   font-bold cursor-pointer transition  hover:bg-gray-400 hover:shadow-sm hover:duration-200'
        >
          Все
        </button>
        {professions.map((prof) => (
          <button
            key={prof.id}
            type='button'
            onClick={() => handleProfessionSelect(prof)}
            className={
              'bg-gray-200 px-5 py-3 rounded-xl mb-2   font-bold cursor-pointer transition  hover:bg-gray-400 hover:shadow-sm hover:duration-200'
            }
          >
            {prof.selector}
          </button>
        ))}
      </ul>

      <input
        type='search'
        name='searchQuery'
        placeholder='Поиск...'
        value={searchQuery}
        onChange={handleSearchQuery}
        className='border-4 border-double mb-auto'
      />

      <table className='border-separate border border-slate-500 table-fix'>
        <tbody>
          {filteredData.map((d) => (
            <tr key={d.id}>
              <td className='border border-slate-600 p-3'>{d.id}</td>
              <td className='border border-slate-600 p-3'>{d.profession}</td>
              <td className='border border-slate-600 p-3'>{d.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Unit1
