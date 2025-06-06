import '../styles/PasswordHistory.scss'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { changeStrengthCheckerValue } from '@/redux/features/password-slice'
import { Oval } from 'react-loader-spinner'
import { loadTokenFromStorage } from '@/redux/features/auth-slice'

const PasswordHistory = () => {
  const [passwords, setPasswords] = useState([])

  const isSaving = useAppSelector(
    (state) => state.passwordReducer.value.isSavingToHistory
  )
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(loadTokenFromStorage())
  }, [dispatch])

  const token = useAppSelector((state) => state.authReducer.value.token)

  if (!token)
    return (
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }}
      >
        <Oval
          visible={true}
          height='80'
          width='80'
          color='#4fa94d'
          ariaLabel='oval-loading'
          wrapperStyle={{}}
          wrapperClass=''
        />
      </div>
    )

  const url =
    'https://password-gen-backend-production.up.railway.app/api/password/getHistory'

  // fetchHistory
  const fetchData = async () => {
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      if (!res.ok) throw new Error('Failed to fetch passwords')
      const data = await res.json()
      setPasswords(data?.data[0]?.passwordsGenerated ?? [])
      console.log('Fetched data:', data?.data[0]?.passwordsGenerated)
    } catch (err) {
      console.error(err)
    }
  }

  // fetch data on mount
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (!isSaving) {
      fetchData()
      console.log(isSaving)
    }
  }, [isSaving])

  const deleteUrl =
    'https://password-gen-backend-production.up.railway.app/api/password/override'
  const handleDelete = async (password: string) => {
    try {
      const res = await fetch(deleteUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          passwordForDelete: password,
        }),
      })

      if (!res.ok) throw new Error('Failed to delete password')
      const updated = passwords.filter((item) => item !== password)
      setPasswords(updated)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='password-container dropdown mt-5 mt-md-3 mb-5 shadow p-3 rounded'>
      <button
        className='btn btn-sm dropdown- mt-1'
        type='button'
        id='dropdownMenuButton1'
        data-bs-toggle='dropdown'
        data-bs-auto-close='outside'
        aria-expanded='false'
        style={{
          background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
          borderRadius: '1rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          fontSize: '1.25rem',
          border: 'none',
        }}
      >
        <h5>Generated Passwords</h5>
      </button>

      <ul className='dropdown-menu ' aria-labelledby='dropdownMenuButton1'>
        {passwords.length === 0 ? (
          <li className='dropdown-item text-muted'>No saved passwords</li>
        ) : (
          passwords.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className='dropdown-item d-flex justify-content-between align-items-center'
            >
              <span
                onClick={() => {
                  dispatch(changeStrengthCheckerValue(item))
                }}
              >
                {item}
              </span>

              <button
                className='btn d-inline'
                onClick={(e) => {
                  e.stopPropagation()
                  handleDelete(item)
                }}
              >
                🗑️
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default PasswordHistory
