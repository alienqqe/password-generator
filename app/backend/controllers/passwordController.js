const { jwtDecode } = require('jwt-decode')
const supabase = require('../supabaseClient')

exports.overridePasswords = async (req, res) => {
  const { passwords } = req.body
  const { passwordForDelete } = req.body

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
      .from('passwords')
      .select('passwordsGenerated')
      .eq('userId', userId)

    if (fetchError) {
      return res
        .status(400)
        .json({ error: 'Error fetching column', fetchError })
    }
    if (!existingData || existingData.length === 0) {
      return res.status(404).json({ error: 'The row doesnt exist' })
    }

    const existingPasswords = existingData[0].passwordsGenerated || []
    console.log(existingPasswords)
    const updatedPasswords = existingPasswords.filter(
      (item) => item != passwordForDelete
    )
    console.log(updatedPasswords)

    const { data, error: err } = await supabase
      .from('passwords')
      .update({ passwordsGenerated: updatedPasswords })
      .eq('userId', userId)
      .select()

    if (err) {
      return res.status(400).json({ message: 'Failed updating passwords', err })
    }

    return res.status(200).json({ message: 'Password saved', data })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Failed to save password' })
  }
}

exports.savePassword = async (req, res) => {
  const { password } = req.body

  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid token' })
  }

  const token = authHeader.split(' ')[1]
  console.log(token)

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
      .from('passwords')
      .select('passwordsGenerated')
      .eq('userId', userId)

    if (fetchError) {
      return res
        .status(400)
        .json({ error: 'Error fetching column', fetchError })
    }
    if (!existingData || existingData.length === 0) {
      const { data: insertData, error: insertError } = await supabase
        .from('passwords')
        .insert([{ userId, passwordsGenerated: [password] }])

      if (insertError) {
        return res
          .status(400)
          .json({ error: 'Error inserting new row', insertError })
      }

      return res
        .status(200)
        .json({ message: 'New password row created', data: insertData })
    }

    const existingPasswords = existingData[0].passwordsGenerated || []
    console.log(existingPasswords)
    const updatedPasswords = [...existingPasswords, password]
    console.log(updatedPasswords)

    const { data, error: err } = await supabase
      .from('passwords')
      .update({ passwordsGenerated: updatedPasswords })
      .eq('userId', userId)
      .select()

    if (err) {
      return res.status(400).json({ message: 'Failed updating passwords', err })
    }

    return res.status(200).json({ message: 'Password saved', data })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Failed to save password' })
  }
}

exports.getHistory = async (req, res) => {
  const { userId } = req.user

  const { data: passwordData, error: fetchError } = await supabase
    .from('passwords')
    .select('passwordsGenerated')
    .eq('userId', userId)

  if (fetchError) {
    return res
      .status(400)
      .json({ error: 'Error while fetching password history', fetchError })
  }

  return res.status(200).json({ data: passwordData })
}
