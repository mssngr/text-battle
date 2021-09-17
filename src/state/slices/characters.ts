import { createSlice } from '@reduxjs/toolkit'

export interface Character {
  id: string
  name: string
  strength: number
}

const initialState: Record<string, Character> = {
  user: {
    id: 'user',
    name: 'Nameless',
    strength: 3,
  },
  1: {
    id: '1',
    name: 'Bandit',
    strength: 3,
  },
}

export default createSlice({
  name: 'counter',
  initialState,
  reducers: {
    rename: (state, action) => {
      const character = state[action.payload.id]
      character.name = action.payload.newName
    },
    updateStrength: (state, action) => {
      const character = state[action.payload.id]
      character.strength = action.payload.newStrength
    },
    restoreStrength: (state, action) => {
      const character = state[action.payload.id]
      character.strength = 3
    },
  },
})
