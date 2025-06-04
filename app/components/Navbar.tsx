'use client'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { logout } from '@/redux/features/auth-slice'
import { setResult } from '@/redux/features/password-slice'

interface userDataType {
  email: string
  userId: string
}

const Navbar = ({ userData }: { userData: userDataType | null }) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleButtonLogOut = () => {
    if (confirm('Are you sure you want to logout?')) {
      dispatch(setResult(''))
      dispatch(logout())
    }
  }

  return (
    <>
      <div className='text-center d-flex justify-content-between flex-row-reverse text-light shadow-sm p-3 mb-5 rounded'>
        <div className='d-flex align-items-center justify-content-center gap-3'>
          <h4 className='text-dark'>{userData?.email}</h4>
          <button className='btn btn-primary' onClick={handleButtonLogOut}>
            Logout
          </button>
        </div>

        <h1 className='mt-2 text-dark fs-1 d-none d-md-inline'>
          Password Generator
        </h1>
      </div>
    </>
  )
}

export default Navbar
