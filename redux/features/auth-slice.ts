import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

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

export const loadTokenFromStorage = createAsyncThunk(
  'auth/loadTokenFromStorage',
  async () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token')
    }
    return null
  }
)

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
  },
  extraReducers: (builder) => {
    builder.addCase(loadTokenFromStorage.fulfilled, (state, action) => {
      state.value.token = action.payload
    })
  },
})

export const { login, logout } = auth.actions

export default auth.reducer
