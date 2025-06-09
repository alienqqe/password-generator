'use client'
import React, { useState, useContext, FormEvent, useEffect } from 'react'

import '../styles/AuthForm.scss'
import { useRouter } from 'next/navigation'
import { Oval } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { loadTokenFromStorage, login } from '@/redux/features/auth-slice'

interface AuthFormProps {
  mode: 'login' | 'register'
}

interface ApiResponse {
  token?: string
  error?: string
  message?: string
  temporaryToken?: string
}

export default function AuthForm({ mode }: AuthFormProps) {
  const token = useAppSelector((state) => state.authReducer.value.token)
  const dispatch = useDispatch<AppDispatch>()
  const [email, setEmail] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [isTokenLoaded, setLoaded] = useState(false)

  useEffect(() => {
    const loadToken = async () => {
      await dispatch(loadTokenFromStorage())
      setLoaded(true)
    }
    loadToken()
  }, [dispatch])

  useEffect(() => {
    if (token && isTokenLoaded) {
      router.push('/')
    }
  }, [token, isTokenLoaded, router])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccessMessage(null)

    const url =
      mode === 'login'
        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`
        : `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`

    try {
      setIsFetching(true)
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
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

      if (mode === 'login' && data.token && !error) {
        dispatch(login(data.token))
        router.push('/')
      } else if (mode === 'register') {
        setSuccessMessage(
          data.message ||
            'Registration successful! Please check your email to verify your account and log in.'
        )
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsFetching(false)
    }
  }

  return (
    <>
      {isFetching || !isTokenLoaded ? (
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
      ) : (
        <div
          style={{ height: '100vh' }}
          className='d-flex align-items-center justify-content-center flex-column gap-4 mb-3'
        >
          <form
            onSubmit={handleSubmit}
            className='auth-form d-flex align-items-center justify-content-center flex-column gap-4 mb-3'
          >
            <h1>{mode === 'login' ? 'Login' : 'Register'}</h1>

            <input
              className='input'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {successMessage && <p className='text-success'>{successMessage}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className='btn btn-lg btn-primary' type='submit'>
              {mode === 'login' ? 'Login' : 'Register'}
            </button>
            <p>
              {mode === 'login' ? (
                <>
                  Dont have an account yet? <a href='/register'>Register</a>
                </>
              ) : (
                <>
                  Already have an account? <a href='/login'>Login</a>
                </>
              )}
            </p>
          </form>
        </div>
      )}
    </>
  )
}
