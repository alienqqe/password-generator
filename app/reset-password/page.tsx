'use client'
import { loadTokenFromStorage } from '@/redux/features/auth-slice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useSearchParams } from 'next/navigation'
import '../styles/AuthForm.scss'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'

interface ApiResponse {
  token?: string
  error?: string
  message?: string
  temporaryToken?: string
}

const page = () => {
  const token = useAppSelector((state) => state.authReducer.value.token)
  const [loaded, setLoaded] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isFetching, setIsFetching] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const loadToken = async () => {
      await dispatch(loadTokenFromStorage())
      setLoaded(true)
    }
    loadToken()
  }, [dispatch])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    if (confirmPassword !== newPassword) {
      setError("Passwords doesn't match")
      return
    }

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/reset-password`

    try {
      setIsFetching(true)
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          newPassword: newPassword,
          token: searchParams.get('token'),
        }),
      })
      const data: ApiResponse = await res.json()

      if (!res.ok) {
        setIsFetching(false)
        throw new Error(data.error || 'Something went wrong')
      }
      console.log(data)

      if (data.error) {
        setIsFetching(false)
        setError(data.error)
        return
      }

      setSuccessMessage('Password successfully changed. You can now log in')

      setTimeout(() => router.push('/login'), 4000)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsFetching(false)
    }
  }

  return (
    <>
      {!loaded ? (
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
          />{' '}
        </div>
      ) : (
        <div
          style={{ height: '100vh' }}
          className='d-flex align-items-center justify-content-center flex-column gap-4 mb-3'
        >
          <form
            onSubmit={handleSubmit}
            className='auth-form d-flex align-items-center justify-content-center flex-column gap-4 mb-3'
          >
            <h1>Reset password</h1>

            <input
              className='input'
              type='password'
              placeholder='Enter password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <input
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {successMessage ? (
              <p className='text-success text-center'>{successMessage}</p>
            ) : (
              ''
            )}
            {error ? <p className='text-danger text-center'>{error}</p> : ''}
            <button className='btn btn-lg btn-primary' type='submit'>
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default page
