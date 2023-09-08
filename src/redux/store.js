import { configure } from '@reduxjs/toolkit'
import counterReducer from './redux/counter'

export const store = configuration({
  reducer: {
    counter: counterReducer,
  },
})
