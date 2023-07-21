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
  },
})

// Action creators are generated for each case reducer function
const { green, red, blue, updateSelector_2_1, updateToDo, updateTextArea } =
  appSlice.actions

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
  const dispatch = useDispatch()
  return {
    color,
    selector_2_1,
    currentToDo,
    textArea1,
    green: () => dispatch(green()),
    red: () => dispatch(red()),
    blue: () => dispatch(blue()),
    setSelector_2_1: (selector) => dispatch(updateSelector_2_1(selector)),
    setCurrentToDo: (toDo) => dispatch(updateToDo(toDo)),
    setTextArea: (t) => dispatch(updateTextArea(t)),
  }
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}
