'use client'
import React, { useState } from 'react'
import { sha1 } from 'js-sha1'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const Pwned = () => {
  const [password, setPassword] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [passwordPreview, setPreview] = useState(false)

  const checkPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    const hash = sha1(password).toUpperCase()
    console.log(hash)
    const prefix = hash.slice(0, 5)
    const suffix = hash.slice(5)
    let breaches = 0
    let found = false

    const fetchedData = await fetch(
      `https://api.pwnedpasswords.com/range/${prefix}`
    )
    const text = await fetchedData.text()

    const splittedData = text.split('\n')

    for (let line of splittedData) {
      const splited = line.trim().split(':')
      if (splited[0] === suffix) {
        found = true
        console.log(splited[1])
        breaches = parseInt(splited[1])
      }
    }

    setResult(
      found
        ? `Your password has been detected in ${breaches}  ${
            breaches === 1 ? 'breach' : 'breaches'
          } `
        : `Congratulations! Your password was found in ${breaches} breaches`
    )
  }

  return (
    <div className='password-container text-center ms-md-5 shadow p-2 rounded'>
      <form onSubmit={checkPassword}>
        <h5 className='pt-2'>Have your password been pwned?</h5>
        <div className='input-group mb-3 mt-3'>
          <input
            type={passwordPreview ? 'text' : 'password'}
            className='form-control input'
            placeholder='Password'
            aria-label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby='button-addon2'
          />
          <button
            className='btn btn-secondary'
            type='button'
            id='button-addon2'
            onClick={() => setPreview(!passwordPreview)}
          >
            {passwordPreview ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>

        {result ? <p className='mt-1 fw-bold'>{result}</p> : ''}
      </form>
    </div>
  )
}

export default Pwned
