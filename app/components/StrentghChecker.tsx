'use client'
import { changeStrengthCheckerValue } from '@/redux/features/password-slice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import PasswordStrengthBar from 'react-password-strength-bar'
import { useDispatch } from 'react-redux'

const StrentghChecker = () => {
  const dispatch = useDispatch<AppDispatch>()

  const strentghCheckerValue: string = useAppSelector(
    (state) => state.passwordReducer.value.strengthCheckerInputValue
  )

  const copy = async () => {
    await navigator.clipboard.writeText(strentghCheckerValue)
    alert('Text copied')
  }
  return (
    <div className='password-container ms-md-5 mb-5 shadow p-3 rounded'>
      <h4 className='pb-1'>Password Strength Check</h4>
      <div className=''>
        <span className='password-text'>
          <input
            type='text'
            value={strentghCheckerValue}
            onChange={(e) =>
              dispatch(changeStrengthCheckerValue(e.target.value))
            }
          />
        </span>

        <button className='btn btn-dark clipboard ms-1 mb-1' onClick={copy}>
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
      <div className=''>
        <PasswordStrengthBar password={strentghCheckerValue} />
      </div>
    </div>
  )
}

export default StrentghChecker
