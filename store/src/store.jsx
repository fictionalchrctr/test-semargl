import React from 'react'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider, useSelector, useDispatch } from 'react-redux'

export const appSlice = createSlice({
  name: 'slice',
  initialState: {
    color: 'bg-blue',
    selector_2_1: null,
    currentToDo: [],
    textArea1: null,
    table_2_1: [],
  },
  reducers: {
    green: (state) => {
      state.color = 'bg-green'
    },
    red: (state) => {
      state.color = 'bg-red'
    },
    blue: (state) => {
      state.color = 'bg-blue'
    },
    updateSelector_2_1: (state, action) => {
      state.selector_2_1 = action.payload
    },
    updateToDo: (state, action) => {
      state.currentToDo = action.payload
    },
    updateTextArea: (state, action) => {
      state.textArea1 = action.payload
    },
    updateTable_2_1: (state, action) => {
      state.table_2_1 = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
const {
  green,
  red,
  blue,
  updateSelector_2_1,
  updateToDo,
  updateTextArea,
  updateTable_2_1,
} = appSlice.actions

// export default appSlice.reducer

const store = configureStore({
  reducer: {
    slice: appSlice.reducer,
  },
})

export function useStore() {
  const color = useSelector((state) => state.slice.color)
  const selector_2_1 = useSelector((state) => state.slice.selector_2_1)
  const currentToDo = useSelector((state) => state.slice.currentToDo)
  const textArea1 = useSelector((state) => state.slice.textArea1)
  const table_2_1 = useSelector((state) => state.slice.table_2_1)
  const dispatch = useDispatch()
  return {
    color,
    selector_2_1,
    currentToDo,
    textArea1,
    table_2_1,
    green: () => dispatch(green()),
    red: () => dispatch(red()),
    blue: () => dispatch(blue()),
    setSelector_2_1: (selector) => dispatch(updateSelector_2_1(selector)),
    setCurrentToDo: (toDo) => dispatch(updateToDo(toDo)),
    setTextArea: (text) => dispatch(updateTextArea(text)),
    setTable_2_1: (table) => dispatch(updateTable_2_1(table)),
  }
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}
