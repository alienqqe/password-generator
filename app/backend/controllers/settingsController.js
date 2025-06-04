const { jwtDecode } = require('jwt-decode')
const supabase = require('../supabaseClient')
const { error } = require('console')

exports.getSettings = async (req, res) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid token' })
  }

  const token = authHeader.split(' ')[1]

  let userId

  try {
    const decoded = jwtDecode(token)
    userId = decoded?.userId

    if (!userId) {
      return res.status(401).json({ error: 'Token missing userId' })
    }
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }

  try {
    const { data: data, error: fetchError } = await supabase
      .from('settings')
      .select('isUpperCase, isSymbols, isNumbers, passwordLength')
      .eq('userId', userId)

    if (fetchError) {
      return res
        .status(400)
        .json({ error: 'Error while fetching data', fetchError })
    }

    if (!data || data.length === 0) {
      const { data, error: insertError } = await supabase
        .from('settings')
        .insert([
          {
            userId: userId,
            isSymbols: false,
            isNumbers: false,
            isUpperCase: false,
            passwordLength: 0,
          },
        ])
      return res.status(200).json({ message: 'New row created', data: data })
    }

    return res.status(200).json({ data: data })
  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: 'Error while fetching settings', err })
  }
}

exports.setSettings = async (req, res) => {
  const { isUpperCase, isNumbers, isSymbols, passwordLength } = req.body

  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid token' })
  }

  const token = authHeader.split(' ')[1]

  let userId

  try {
    const decoded = jwtDecode(token)
    userId = decoded?.userId

    if (!userId) {
      return res.status(401).json({ error: 'Token missing userId' })
    }
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }

  try {
    const { data: existingData, error: fetchError } = await supabase
      .from('settings')
      .select('isUpperCase, isSymbols, isNumbers, passwordLength')
      .eq('userId', userId)

    if (fetchError) {
      return res
        .status(400)
        .json({ error: 'Error while fetching data', fetchError })
    }

    if (!existingData || existingData.length === 0) {
      const { data: insertData, error: insertError } = await supabase
        .from('settings')
        .insert([
          {
            userId: userId,
            isSymbols: isSymbols,
            isNumbers: isNumbers,
            isUpperCase: isUpperCase,
            passwordLength: passwordLength,
          },
        ])
        .select('*')

      if (insertError) {
        return res
          .status(400)
          .json({ error: 'Error inserting new row', insertError })
      }

      return res
        .status(200)
        .json({ message: 'New settings row created', data: insertData })
    }

    const { data, error: err } = await supabase
      .from('settings')
      .update({
        isNumbers: isNumbers,
        isSymbols: isSymbols,
        isUpperCase: isUpperCase,
        passwordLength: passwordLength,
      })
      .eq('userId', userId)
      .select()

    if (err) {
      return res.status(400).json({ message: 'Failed updating settings', err })
    }

    return res.status(200).json({ message: 'Settings saved', data })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Failed to save settings', err })
  }
}
