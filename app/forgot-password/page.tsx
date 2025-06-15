'use client'
import React, { FormEvent, useState } from 'react'
import '../styles/AuthForm.scss'
import { Oval } from 'react-loader-spinner'

const page = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [isFetching, setIsFetching] = useState(false)

  interface ApiResponse {
    token?: string
    error?: string
    message?: string
    temporaryToken?: string
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccessMessage(null)

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/forgot-password`

    try {
      setIsFetching(true)
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email }),
      })

      const data: ApiResponse = await res.json()

      if (!res.ok) {
        setIsFetching(false)
        throw new Error(data.message || 'Something went wrong')
      }
      console.log(data)

      if (data.message) {
        setIsFetching(false)
        setError(data.message)
        return
      }

      setSuccessMessage('Check your inbox and click the link in the mail')
    } catch (err: any) {
      setIsFetching(false)
      setError(err.message)
    } finally {
      setIsFetching(false)
    }
  }

  if (isFetching) {
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
  }

  return (
    <div>
      <div
        style={{ height: '100vh' }}
        className='d-flex align-items-center justify-content-center flex-column gap-4 mb-3'
      >
        <form
          className='auth-form d-flex align-items-center justify-content-center flex-column gap-2 mb-3'
          onSubmit={handleSubmit}
        >
          <h1>Reset password</h1>

          <p>Enter your email</p>
          <input
            className='input'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {successMessage ? (
            <p className='text-success mt-3 text-center'>{successMessage}</p>
          ) : (
            ''
          )}
          {error ? (
            <p className='text-danger mt-3 text-center '>{error}</p>
          ) : (
            ''
          )}
          <button
            className='btn btn-lg btn-primary mt-3'
            type='submit'
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default page
