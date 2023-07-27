import React, { useState, useEffect } from 'react'
import { useStore } from 'store/store'

const Unit1 = () => {
  const store = useStore()
  const { setSelector_2_1, setTable_2_1 } = store
  const [searchQuery, setSerarchQuery] = useState('')
  const [selectedProf, setSelectedProf] = useState('')

  useEffect(() => {
    const loadedSelector =
      localStorage.getItem('selector') !== undefined
        ? JSON.parse(localStorage.getItem('selector'))
        : null
    if (loadedSelector) {
      setSelectedProf(loadedSelector)
    }
  }, [])

  useEffect(() => {
    const json = JSON.stringify(selectedProf)
    localStorage.setItem('selector', json)
  }, [selectedProf])

  // //////////////////////////////////////////////////

  useEffect(() => {
    const loadedQuery =
      localStorage.getItem('query') !== undefined
        ? JSON.parse(localStorage.getItem('query'))
        : null
    if (loadedQuery) {
      setSerarchQuery(loadedQuery)
    }
  }, [])

  useEffect(() => {
    const json = JSON.stringify(searchQuery)
    localStorage.setItem('query', json)
  }, [searchQuery])

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
    { id: 'c0', selector: '' },
    { id: 'c1', selector: 'Developer' },
    { id: 'c2', selector: 'Lawyer' },
    { id: 'c3', selector: 'Driver' },
  ]

  const handleProfessionSelect = (event) => {
    if (searchQuery !== '') setSerarchQuery('')
    setSelectedProf(event.target.value)
  }

  const handleSearchQuery = (event) => {
    setSelectedProf('')
    setSerarchQuery(event.target.value)
  }

  function filterData(data) {
    const filteredData = searchQuery
      ? data.filter(
          (d) => d.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        )
      : selectedProf
      ? data.filter((d) => d.profession === selectedProf)
      : data
    return filteredData
  }

  const filteredData = filterData(data)

  useEffect(() => {
    setSelector_2_1(selectedProf)
  }, [selectedProf])

  useEffect(() => {
    setTable_2_1(filteredData)
  }, [selectedProf, searchQuery])

  return (
    <div className='flex flex-row justify-between'>
      <div>
        <select
          value={selectedProf}
          onChange={handleProfessionSelect}
          className='bg-gray-200 px-3 py-1 rounded-xl'
        >
          {professions.map((prof) => (
            <option value={prof.selector} key={prof.selector}>
              {prof.selector}
            </option>
          ))}
        </select>
      </div>

      <input
        type='search'
        name='searchQuery'
        placeholder='Поиск...'
        value={searchQuery}
        onChange={handleSearchQuery}
        className='border-2 border-solid  border-gray-200 rounded-xl px-2 mb-auto focus:outline-none focus:ring-1 focus:ring-blue-400'
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
