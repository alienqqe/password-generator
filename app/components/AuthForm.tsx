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
}

export default function AuthForm({ mode }: AuthFormProps) {
  const token = useAppSelector((state) => state.authReducer.value.token)
  const dispatch = useDispatch<AppDispatch>()
  const [email, setEmail] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isTokenLoaded, setLoaded] = useState(false)

  useEffect(() => {
    dispatch(loadTokenFromStorage())
    setLoaded(true)
  }, [dispatch])

  useEffect(() => {
    if (token) {
      router.push('/')
    }
  }, [token])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const url =
      mode === 'login'
        ? 'https://password-gen-backend-production.up.railway.app/api/auth/login'
        : 'https://password-gen-backend-production.up.railway.app/api/auth/register'

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

      if (mode === 'login' && data.token) {
        dispatch(login(data.token))
        router.push('/')
      } else if (mode === 'register') {
        alert('Registration successful! Please login.')
        router.push('/login')
      }
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <>
      {isFetching || !isTokenLoaded || token ? (
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
