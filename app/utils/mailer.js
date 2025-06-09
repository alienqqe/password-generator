const nodemailer = require('nodemailer')

exports.sendVerificationEmail = async (email, token) => {
  const link = `${process.env.FRONTEND_URL}/verify-email?token=${token}`
  console.log('Sending verification email to:', email)
  console.log('Token:', token)
  console.log('Frontend url', process.env.NEXT_PUBLIC_FRONTEND_URL)
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
