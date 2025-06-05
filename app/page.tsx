'use client'
import { useEffect, useState } from 'react'
import Generator from './components/Generator'
import Navbar from './components/Navbar'
import { useRouter } from 'next/navigation'
import { Oval } from 'react-loader-spinner'
import { jwtDecode } from 'jwt-decode'
import PasswordHistory from './components/PasswordHistory'
import StrentghChecker from './components/StrentghChecker'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { logout, loadTokenFromStorage } from '@/redux/features/auth-slice'

interface userDataType {
  email: string
  userId: string
}

export default function Home() {
  const router = useRouter()
  const [userData, setUserData] = useState<userDataType | null>(null)
  const [isFetching, setFetching] = useState(false)
  const [isTokenLoaded, setIsTokenLoaded] = useState(false)

  const dispatch = useDispatch<AppDispatch>()

  const token = useAppSelector((state) => state.authReducer.value.token)

  useEffect(() => {
    const load = async () => {
      await dispatch(loadTokenFromStorage())
      setIsTokenLoaded(true)
    }
    load()
  }, [dispatch])

  useEffect(() => {
    try {
      if (!token && isTokenLoaded) return
      if (!token) return

      const decoded = jwtDecode<{ exp: number }>(token)
      if (!decoded.exp) {
        console.warn('Decoded token doesnt have expiration date! Logging out')
        dispatch(logout())
        router.push('/login')
        return
      }
      const expire = decoded.exp * 1000
      const timeout = expire - Date.now() - 10000

      if (timeout <= 0) {
        dispatch(logout())
        router.push('/login')
        return
      }

      const timer = setTimeout(() => {
        dispatch(logout())
        router.push('/login')
      }, timeout)

      return () => clearTimeout(timer)
    } catch (err) {
      console.error('Failed to decode token', err)
      dispatch(logout())
      router.push('/login')
    }
  }, [token, isTokenLoaded])

  const url =
    'https://password-gen-backend-production.up.railway.app/api/auth/me'

  useEffect(() => {
    setFetching(true)
    const fetchUserData = async () => {
      try {
        if (!token || !isTokenLoaded) {
          return
        }

        const res = await fetch(url, {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        })

        if (!res.ok) {
          router.push('/login')
          return
        }

        const jsonData = await res.json()
        setUserData(jsonData)
      } catch (err) {
        console.error('Failed to fetch data', err)
        router.push('/login')
      } finally {
        setFetching(false)
      }
    }

    fetchUserData()
  }, [token, isTokenLoaded])

  useEffect(() => {
    if (!token && isTokenLoaded) {
      router.push('/login')
    }
  }, [token, isTokenLoaded])

  const isLoggedIn = token && userData

  if (isFetching || !isLoggedIn) {
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
    <>
      <Navbar userData={userData} />
      <div className='d-flex align-items-center justify-content-center flex-column flex-md-row'>
        <Generator />
        <div className='d-flex align-items-center flex-column justify-content-center'>
          <StrentghChecker />
          <PasswordHistory />
        </div>
      </div>
    </>
  )
}
