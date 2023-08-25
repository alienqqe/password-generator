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
}

const initialState = {
  value: {
    length: 0,
    isUppercase: undefined,
    isNumbers: undefined,
    isSymbols: undefined,
    result: '',
  } as PasswordState,
} as InitialState

export const password = createSlice({
  name: 'password',
  initialState: initialState,
  reducers: {
    toggleUppercase: (state, action: PayloadAction<boolean>) => {
      state.value.isUppercase = !action.payload
    },
    toggleNumbers: (state, action: PayloadAction<boolean>) => {
      state.value.isNumbers = !action.payload
    },
    toggleSymbols: (state, action: PayloadAction<boolean>) => {
      state.value.isSymbols = !action.payload
    },
    createPassword: (state, action: PayloadAction<number>) => {
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

      return {
        value: {
          length: action.payload,
          result: passwordCharacters(),
          isUppercase: state.value.isUppercase,
          isSymbols: state.value.isSymbols,
          isNumbers: state.value.isNumbers,
        },
      }
    },
  },
})

export const { toggleUppercase, toggleNumbers, toggleSymbols, createPassword } =
  password.actions
export default password.reducer
