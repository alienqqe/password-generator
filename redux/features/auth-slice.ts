import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  value: AuthState
}

type AuthState = {
  token: string | null
}

const initialState = {
  value: {
    token: null,
  } as AuthState,
} as InitialState

export const auth = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.value.token = action.payload
      localStorage.setItem('token', action.payload)
    },
    logout: (state) => {
      state.value.token = null
      localStorage.removeItem('token')
    },
    loadTokenFromStorage: (state) => {
      const storedToken = localStorage.getItem('token')
      state.value.token = storedToken
    },
  },
})

export const { login, logout, loadTokenFromStorage } = auth.actions

export default auth.reducer
