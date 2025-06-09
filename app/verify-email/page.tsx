'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import '../styles/VerifyEmail.scss'

const page = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState('')

  useEffect(() => {
    const verify = async () => {
      const token = searchParams.get('token')

      if (!token) {
        setError('No verification token provided')
        return
      }

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/verify-email?token=${token}`,
          {
            method: 'GET',
          }
        )

        const data = await res.json()

        if (res.ok && data.message?.includes('successfully')) {
          router.push('/login')
        } else {
          setError(data.error || 'Verification failed')
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unexpected error occurred'
        )
      }
    }
    verify()
  }, [router, searchParams])

  return (
    <div
      className='d-flex align-items-center justify-content-center flex-column'
      style={{ width: '100vw', height: '100vh' }}
    >
      <div className='verify-email d-flex flex-column align-items-center justify-content-center '>
        <h1>Email verification</h1>
        <h4>Check your email and click on the link in the mail</h4>
        {error ? <p className='text-danger'>{error}</p> : ''}
      </div>
    </div>
  )
}

export default page
