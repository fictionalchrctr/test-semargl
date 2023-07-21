import React, { useState, useEffect } from 'react'
import { useStore } from 'store/store'

const ToDoList = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [todoEditing, setTodoEditing] = useState(null)
  const [editingText, setEditingText] = useState('')

  const store = useStore()
  const { setCurrentToDo } = store

  useEffect(() => {
    const json = localStorage.getItem('todos')
    const loadedTodos = JSON.parse(json)
    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  }, [])

  useEffect(() => {
    const json = JSON.stringify(todos)
    localStorage.setItem('todos', json)
  }, [todos])

  function handleSubmit(event) {
    event.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    }
    setTodos([...todos].concat(newTodo))
    setTodo('')
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText
      }
      return todo
    })
    setTodos(updatedTodos)
    setTodoEditing(null)
  }

  setCurrentToDo(todos)

  return (
    <div className=' w-auto mx-14 my-auto'>
      <h1>Todo List</h1>
      <form
        className=' flex justify-between mb-7 border-solid border-1 '
        onSubmit={handleSubmit}
      >
        <input
          className=' px-1 py-2 flex-grow mr-4 cursor-pointer rounded-xl ring-1  hover:ring-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400'
          type='text'
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          className=' text-base bg-blue-400 rounded-xl border-none px-2 py-4 cursor-pointer hover:bg-blue-300 focus:ring-offset-purple-400'
          type='submit'
        >
          Add Todo
        </button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className='flex flex-col'>
          <div className='text-xl mb-4 flex  rounded-xl items-center justify-between border-solid border-2  border-[#f3f3f3]'>
            <input
              type='checkbox'
              className=' p-1 m-1 cursor-pointer'
              id='completed'
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
              <input
                className=' p-1 cursor-pointer  ring-1  hover:ring-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400'
                type='text'
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
            {todo.id === todoEditing ? (
              <button
                className=' text-base bg-blue-400 rounded-xl border-none p-1 m-1 cursor-pointer hover:bg-blue-300 focus:ring-offset-purple-400'
                onClick={() => submitEdits(todo.id)}
              >
                Submit Edits
              </button>
            ) : (
              <button
                className=' text-base bg-blue-400 rounded-xl border-none p-1 m-1 cursor-pointer hover:bg-blue-300 focus:ring-offset-purple-400'
                onClick={() => setTodoEditing(todo.id)}
              >
                Edit
              </button>
            )}

            <button
              className=' text-base bg-blue-400 rounded-xl border-none p-1 m-1 cursor-pointer hover:bg-blue-300 focus:ring-offset-purple-400'
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ToDoList
