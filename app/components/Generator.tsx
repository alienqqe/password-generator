'use client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import {
  toggleUppercase,
  toggleNumbers,
  toggleSymbols,
  createPassword,
} from '@/redux/features/password-slice'

const Generator = () => {
  const [length, setLength] = useState(0)
  const [isUppercase, setUppercase] = useState(false)
  const [isNumbers, setIsNumbers] = useState(false)
  const [isSymbols, setIsSymbols] = useState(false)

  const result = useAppSelector((state) => state.passwordReducer.value.result)

  const dispatch = useDispatch<AppDispatch>()

  const uppercase = () => {
    dispatch(toggleUppercase(isUppercase))
  }
  const numbers = () => {
    dispatch(toggleNumbers(isNumbers))
  }
  const symbols = () => {
    dispatch(toggleSymbols(isSymbols))
  }

  const password = () => {
    dispatch(createPassword(length))
  }

  const copy = async () => {
    await navigator.clipboard.writeText(result)
    alert('Text copied')
  }

  const whiteSpaceRegEx = new RegExp(/\s/g)

  return (
    <div className='generator-container container mt-5 shadow p-3  rounded'>
      <div className='result-container'>
        <span className='result'>
          {result?.replaceAll(whiteSpaceRegEx, '')}
        </span>
        <button className='btn btn-dark clipboard' onClick={copy}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-clipboard mb-1'
            viewBox='0 0 16 16'
          >
            <path d='M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z' />
            <path d='M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z' />
          </svg>
        </button>
      </div>
      <div className='settings w-100'>
        <div className='setting d-flex justify-content-between align-items-center'>
          <label className='px-3'>Password length</label>
          <input
            type='number'
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            id='length'
            min='4'
            max='20'
            className='ms-3'
          />
        </div>
        <div className='setting '>
          <label className='px-3'>Include uppercase letters</label>
          <input
            type='checkbox'
            onChange={uppercase}
            onClick={() => setUppercase(!isUppercase)}
            checked={isUppercase}
            id='uppercase'
            className='ms-3'
          />
        </div>
        <div className='setting '>
          <label className='px-3'>Include numbers</label>
          <input
            type='checkbox'
            onChange={numbers}
            onClick={() => setIsNumbers(!isNumbers)}
            checked={isNumbers}
            id='uppercase'
            className='ms-3'
          />
        </div>
        <div className='setting '>
          <label className='px-3'>Include special symbols</label>
          <input
            type='checkbox'
            onChange={symbols}
            onClick={() => setIsSymbols(!isSymbols)}
            checked={isSymbols}
            id='uppercase'
            className='ms-3'
          />
        </div>
      </div>
      <button
        className='generate-button btn btn-lg d-block w-100 text-center'
        onClick={password}
      >
        Generate
      </button>
    </div>
  )
}

export default Generator
