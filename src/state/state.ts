import { configureStore } from '@reduxjs/toolkit'
import characters from './slices/characters'

const store = configureStore({
  reducer: {
    characters: characters.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

export default store
