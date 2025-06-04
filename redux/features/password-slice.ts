import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  value: PasswordState
}

type PasswordState = {
  length: number
  isUppercase: boolean | undefined
  isNumbers: boolean | undefined
  isSymbols: boolean | undefined
  result: string
  isSavingToHistory: boolean
  strengthCheckerInputValue: string
}

const initialState = {
  value: {
    length: 0,
    isSwitched: undefined,
    isUppercase: undefined,
    isNumbers: undefined,
    isSymbols: undefined,
    result: '',
    isSavingToHistory: false,
    strengthCheckerInputValue: '',
  } as PasswordState,
} as InitialState

export const password = createSlice({
  name: 'password',
  initialState: initialState,
  reducers: {
    changeStrengthCheckerValue: (state, action: PayloadAction<string>) => {
      state.value.strengthCheckerInputValue = action.payload
    },
    setSavingDone: (state) => {
      state.value.isSavingToHistory = false
    },
    setResult: (state, action: PayloadAction<string>) => {
      state.value.result = action.payload
    },
    setSavingToHistory: (state, action: PayloadAction<boolean>) => {
      state.value.isSavingToHistory = action.payload
    },
    createPassword: (state, action: PayloadAction<number>) => {
      state.value.isSavingToHistory = true
      state.value.length = action.payload

      const passwordCharacters = () => {
        let password = ''
        let characters = `abcdefghijklmnopqrstuvwxyz${
          state.value.isUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''
        }${state.value.isSymbols ? '!@#$%^&*()<>,.?/[]{}-=_+|/' : ''}${
          state.value.isNumbers ? '0123456789' : ''
        }
        `

        while (password.length < action.payload) {
          password +=
            characters[
              Math.floor(
                Math.random() * characters.replaceAll(/\s/g, '').length
              )
            ]
        }

        return password
      }

      state.value.result = passwordCharacters()
    },
  },
})

export const {
  createPassword,
  setSavingDone,
  changeStrengthCheckerValue,
  setResult,
  setSavingToHistory,
} = password.actions
export default password.reducer
