import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Menu2 = () => {
  const [searchParams] = useSearchParams()
  console.log('searchParams', searchParams)
  return (
    <div>
      <p>Menu2</p>
    </div>
  )
}

export default Menu2
