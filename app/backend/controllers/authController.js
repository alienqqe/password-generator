const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const supabase = require('../supabaseClient')

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

    const { data, error } = await supabase
      .from('users')
      .insert([{ email, password: hashed }])
      .select()

    if (error) {
      return res.status(400).json({ error: error.message })
    }

    res.status(201).json({ message: 'User registered', user: data[0] })
  } catch (err) {
    console.error('Register error', err)
    res.status(500).json({ error: 'Server error' })
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
