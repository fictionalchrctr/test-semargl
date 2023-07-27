import React, { useState } from 'react'

const DragDrop = () => {
  const [drag, setDrag] = useState(false)
  const [file, setFile] = useState()
  // const [fileSize, setFileSize] = useState('')

  const dragStartHandler = (e) => {
    e.preventDefault()
    setDrag(true)
  }

  const dragLeaveHandler = (e) => {
    e.preventDefault()
    setDrag(false)
  }

  const onDropHandler = (e) => {
    e.preventDefault()
    setFile(e.dataTransfer.files[0])
  }

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }

  const selectSize = (f) => {
    if (f.size / (1024 * 1024) > 1) {
      return (f.size / (1024 * 1024)).toFixed(1) + 'mb'
    } else if (f.size / 1024 > 1) {
      return (f.size / 1024).toFixed(1) + 'kb'
    } else {
      return f.size + 'bytes'
    }
  }

  return (
    <div className='py-12 items-center'>
      <div className=' max-w-7xl mx-auto sm:px-6 lg:px-8'>
        {drag ? (
          <div
            onDragStart={(e) => {
              dragStartHandler(e)
            }}
            onDragLeave={(e) => {
              dragLeaveHandler(e)
            }}
            onDragOver={(e) => {
              dragStartHandler(e)
            }}
            onDrop={(e) => onDropHandler(e)}
            className='flex flex-col items-center px-6 py-12 border-4 border-dashed border-gray-400 rounded-md'
          >
            <div>
              <p className='text-xl text-gray-700'>
                Отпустите файлы, чтобы загрузить их
              </p>
            </div>
            <div>
              <p className='mb-2 text-gray-700'>или</p>
            </div>
            <label
              // htmlFor='file-input'
              className=' bg-white px-4 h-9 inline-flex rounded border border-gray-300 shadow-sm text-sm font-medium cursor-pointer text-gray-700 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500'
              // className=' font-bold hover:cursor-pointer hover:underline ring-1  hover:ring-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400'
            >
              Выберите файлы
              <input
                type='file'
                // id='file-input'
                accept='image/*,.png,.jpg,.gif'
                name='file'
                onChange={handleChange}
                className=' hidden'
              />
            </label>
          </div>
        ) : (
          <div
            onDragStart={(e) => {
              dragStartHandler(e)
            }}
            onDragLeave={(e) => {
              dragLeaveHandler(e)
            }}
            onDragOver={(e) => {
              dragStartHandler(e)
            }}
            className='flex flex-col items-center px-6 py-12  border-2 border-dashed border-gray-400 rounded-md'
          >
            <div>
              <p className='text-xl text-gray-700'>
                Перетащите файлы, чтобы загрузить их
              </p>
            </div>
            <div>
              <p className='mb-2 text-gray-700'>или</p>
            </div>
            <label
              // htmlFor='file-input'
              className=' bg-white px-4 h-9 inline-flex rounded border border-gray-300 shadow-sm text-sm font-medium cursor-pointer text-gray-700 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500'
              // className=' font-bold hover:cursor-pointer hover:underline ring-1  hover:ring-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400'
            >
              Выберите файлы
              <input
                type='file'
                // id='file-input'
                name='file'
                onChange={handleChange}
                className=' hidden'
              />
            </label>
          </div>
        )}
      </div>
      {file && (
        <div className='flex flex-row justify-center items-center px-6 py-12'>
          <div className=' bg-no-repeat bg-contain'>
            <img
              className=' mx-auto my-2'
              src={URL.createObjectURL(file)}
              width='320px'
              height='240px'
            />
          </div>

          <div className='flex flex-col justify-center mx-2 my-2 text-gray-700'>
            <span>Name: {file.name}</span>
            <span>Type: {file.type}</span>
            <span>Size: {selectSize(file)}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default DragDrop
