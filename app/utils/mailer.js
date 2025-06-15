const nodemailer = require('nodemailer')

exports.sendVerificationEmail = async (email, token) => {
  const link = `${process.env.FRONTEND_URL}/verify-email?token=${token}`

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.PASSWORD_USER,
    },
  })

  await transporter.sendMail({
    from: `"Password Generator" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Verify your email',
    html: `
      <h2>Email Verification</h2>
      <p>Click the link below to verify your email:</p>
      <a href="${link}">${link}</a>
    `,
  })
}

exports.sendResetPasswordEmail = async (email, token) => {
  const link = `${process.env.FRONTEND_URL}/reset-password?token=${token}`
  console.log(process.env.FRONTEND_URL)

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.PASSWORD_USER,
    },
  })

  await transporter.sendMail({
    from: `"Password Generator" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Password reset',
    html: `
      <h2>Password Reset</h2>
      <p>Click the link below to reset your password:</p>
      <a href="${link}">${link}</a>
    `,
  })
}
