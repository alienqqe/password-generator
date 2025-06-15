const bcrypt = require('bcrypt')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const supabase = require('../supabaseClient')
const {
  sendVerificationEmail,
  sendResetPasswordEmail,
} = require('../../utils/mailer')

exports.register = async (req, res) => {
  const { email, password } = req.body
  try {
    const hashed = await bcrypt.hash(password, 10)

    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('email')
      .eq('email', email)
      .limit(1)

    if (fetchError) {
      return res.status(400).json({ error: fetchError.message })
    }

    if (existingUser.length > 0) {
      return res.status(400).json({
        error: 'User with this email already exists',
      })
    }

    const temporaryVerificationToken = crypto.randomBytes(32).toString('hex')
    console.log(temporaryVerificationToken)

    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          email,
          password: hashed,
          verified: false,
          verification_token: temporaryVerificationToken,
        },
      ])
      .select()

    if (error) {
      return res.status(400).json({ error: error.message })
    }

    await sendVerificationEmail(email, temporaryVerificationToken)

    res.status(201).json({
      message: 'User registered',
      user: data[0],
      temporaryToken: temporaryVerificationToken,
    })
  } catch (err) {
    console.error('Register error', err)
    res.status(500).json({ error: 'Server error', message: err.message })
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body

  try {
    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .limit(1)

    if (error || users.length === 0) {
      return res.status(401).json({ error: 'Invalid email' })
    }

    const user = users[0]
    console.log(user.verified)

    if (!user.verified) {
      return res.status(403).json({ error: 'Email not verified' })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' })
    }

    const token = jwt.sign(
      { email: user.email, userId: user.id },
      process.env.JWT_SECRET,
      {
        expiresIn: '2h',
      }
    )
    res.json({ message: 'Login successful', token })
  } catch (err) {
    console.error('Login error:', err)
    res.status(500).json({ error: 'Server error' })
  }
}

exports.verifyEmail = async (req, res) => {
  const { token } = req.query

  if (!token) return res.status(400).json({ error: 'Missing token' })

  try {
    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .eq('verification_token', token)
      .limit(1)

    if (error || users.length === 0) {
      const errorMessage = error
        ? error.message
        : 'No user found with that token or token expired.'
      return res
        .status(400)
        .json({ error: 'Invalid or expired token', message: errorMessage })
    }

    const user = users[0]

    const { error: updateError } = await supabase
      .from('users')
      .update({ verified: true, verification_token: null })
      .eq('id', user.id)

    if (updateError) return res.status(500).json({ error: updateError.message })

    res.json({ message: 'Email successfully verified. You can now log in.' })
  } catch (err) {
    console.error('Verification error:', err)
    res.status(500).json({ error: 'Server error' })
  }
}

exports.forgotPassword = async (req, res) => {
  const { email } = req.body

  try {
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)

    if (error || user.length === 0) {
      const errorMessage = error
        ? error.message
        : 'No user found with that email.'
      return res
        .status(400)
        .json({ error: 'Error happened', message: errorMessage })
    }
    if (error) {
      return res
        .status(400)
        .json({ error: 'Error happened', message: error.message })
    }

    const tempToken = crypto.randomBytes(32).toString('hex')

    const { data, updateError } = await supabase
      .from('users')
      .update({ reset_token: tempToken })
      .eq('id', user[0].id)

    if (updateError) {
      return res
        .status(400)
        .json({ error: 'Error happened', message: error.message })
    }

    await sendResetPasswordEmail(user[0].email, tempToken)

    return res.status(200).json({ temporaryToken: tempToken })
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

exports.resetPassword = async (req, res) => {
  const { newPassword, token } = req.body

  try {
    const { data: existingUser, error } = await supabase
      .from('users')
      .select('*')
      .eq('reset_token', token)

    if (existingUser.length === 0 || error) {
      const errorMessage = error ? error.message : 'Invalid token'
      return res
        .status(400)
        .json({ error: 'Invalid or expired token', message: errorMessage })
    }

    const hashed = await bcrypt.hash(newPassword, 10)

    const { data, error: updateError } = await supabase
      .from('users')
      .update({ password: hashed, reset_token: null })
      .eq('reset_token', token)

    if (updateError) {
      return res
        .status(500)
        .json({ error: 'Update error', message: updateError.message })
    }

    res
      .status(200)
      .json({ message: 'Password successfully changed. You can now log in' })
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}
