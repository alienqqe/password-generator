'use client'
import { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import PasswordStrengthBar from 'react-password-strength-bar'
import {
  createPassword,
  setSavingDone,
  setResult,
  setSavingToHistory,
} from '@/redux/features/password-slice'
import StrentghChecker from './StrentghChecker'
import { jwtDecode } from 'jwt-decode'
import { loadTokenFromStorage } from '@/redux/features/auth-slice'

const Generator = () => {
  const [settingsFetched, setSettingsFetched] = useState(false)
  const [justGenerated, setJustGenerated] = useState(false)
  const [length, setLength] = useState(0)
  const [isUppercase, setIsUppercase] = useState(false)
  const [isNumbers, setIsNumbers] = useState(false)
  const [isSymbols, setIsSymbols] = useState(false)
  const [isSavingToSettings, setSavingToSettings] = useState(false)

  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(loadTokenFromStorage())
  }, [dispatch])

  const result: string = useAppSelector(
    (state) => state.passwordReducer.value.result
  )
  const token: string | null = useAppSelector(
    (state) => state.authReducer.value.token
  )

  const getSettingsUrl =
    'https://password-gen-backend-production.up.railway.app/api/settings/getSettings'

  // read setting from db
  const fetchSettings = async () => {
    if (!token) return

    try {
      const res = await fetch(getSettingsUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      if (!res.ok) throw new Error('Failed to read settings')
      const data = await res.json()
      setIsUppercase(data.data[0].isUpperCase)

      setIsNumbers(data.data[0].isNumbers)

      setIsSymbols(data.data[0].isSymbols)

      setLength(data.data[0].passwordLength)

      setSettingsFetched(true)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    fetchSettings()
  }, [])

  useEffect(() => {
    if (!isSavingToSettings) {
      fetchSettings()
    }
  }, [isSavingToSettings])

  const saveSettingsUrl =
    'https://password-gen-backend-production.up.railway.app/api/settings/set'

  // save settings to the db
  useEffect(() => {
    if (!settingsFetched || !token) return
    setSavingToSettings(true)

    try {
      fetch(saveSettingsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          isSymbols: isSymbols,
          isUpperCase: isUppercase,
          isNumbers: isNumbers,
          passwordLength: length,
        }),
      })
        .then((res) => {
          if (!res.ok) throw new Error('Failed to save settings')
          return res.json()
        })
        .then((data) => {
          console.log('Password saved:', data)
        })
        .catch((err) => {
          console.error('POST error:', err)
        })
    } catch (err) {
      console.error(err)
    } finally {
      setSavingToSettings(false)
    }
  }, [isSymbols, isUppercase, isNumbers, length, settingsFetched])

  const url =
    'https://password-gen-backend-production.up.railway.app/api/password/save'

  // save password to the history
  useEffect(() => {
    const whiteSpaceRegEx = new RegExp(/\s/g)

    if (!justGenerated || !result || result.trim() === '') return

    setJustGenerated(true)
    dispatch(setSavingToHistory(true))

    if (!token) return

    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          password: result.replaceAll(whiteSpaceRegEx, ''),
        }),
      })
        .then((res) => {
          if (!res.ok) throw new Error('Failed to save password')
          return res.json()
        })
        .then((data) => {
          dispatch(setSavingDone())
          console.log('Password saved:', data)
        })
        .catch((err) => {
          console.error('POST error:', err)
          dispatch(setSavingDone())
        })
    } catch (err) {
      console.error('JWT decode error:', err)
      dispatch(setSavingDone())
    }
  }, [result])

  const setPassword = () => {
    let password = ''
    let characters = `abcdefghijklmnopqrstuvwxyz${
      isUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''
    }${isSymbols ? '!@#$%^&*()<>,.?/[]{}-=_+|/' : ''}${
      isNumbers ? '0123456789' : ''
    }
        `

    while (password.length < length) {
      password +=
        characters[
          Math.floor(Math.random() * characters.replaceAll(/\s/g, '').length)
        ]
    }

    setJustGenerated(true)
    dispatch(setResult(password))
    console.log(password)
  }

  const copy = async () => {
    await navigator.clipboard.writeText(result)
    alert('Text copied')
  }

  const whiteSpaceRegEx = new RegExp(/\s/g)

  return (
    <div className='d-flex align-items-center justify-content-center flex-column flex-md-row main-container'>
      <div className='generator-container mt-5 shadow p-3 d-block rounded'>
        <h4 className='pb-1 ms-3 ms-md-0'>Password Generator</h4>
        <div className='result-container d-inline-block'>
          <input
            className='d-inline-block ms-1'
            type='text'
            value={result?.replaceAll(whiteSpaceRegEx, '')}
          />
        </div>
        <button
          className='btn btn-dark clipboard-btn d-inline ms-2 '
          onClick={copy}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-clipboard mb-md-1'
            viewBox='0 0 16 16'
          >
            <path d='M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z' />
            <path d='M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z' />
          </svg>
        </button>
        <PasswordStrengthBar password={result} />
        <div className='settings w-100'>
          <div className='text-center'></div>
          <div className='setting d-flex justify-content-between align-items-center'>
            <label className='px-3'>Password length</label>
            <input
              type='number'
              value={length}
              onChange={(e) =>
                parseInt(e.target.value) >= 1 || !e.target.value
                  ? setLength(parseInt(e.target.value))
                  : setLength(4)
              }
              id='length'
              min='1'
              max='20'
              className='ms-3'
            />
          </div>
          <div className='setting '>
            <label className='px-3'>Include uppercase letters</label>
            <input
              type='checkbox'
              onClick={() => setIsUppercase(!isUppercase)}
              checked={isUppercase}
              id='uppercase'
              className='ms-3'
            />
          </div>
          <div className='setting '>
            <label className='px-3'>Include numbers</label>
            <input
              type='checkbox'
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
              onClick={() => setIsSymbols(!isSymbols)}
              checked={isSymbols}
              id='uppercase'
              className='ms-3'
            />
          </div>
        </div>
        <button
          className='generate-button btn btn-outline-light btn-lg d-block w-100 text-center'
          disabled={length >= 4 && length <= 20 ? false : true}
          onClick={setPassword}
        >
          Generate
        </button>
      </div>
    </div>
  )
}

export default Generator
