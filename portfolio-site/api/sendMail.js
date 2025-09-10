require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const isProd = process.env.NODE_ENV === 'production';
  const { EMAIL_USER, EMAIL_PASS, RECIPIENT_EMAIL } = process.env;

  // In local dev, short-circuit to success to avoid transporter issues
  if (!isProd) {
    console.log('[sendMail] Dev mode - not sending email. Payload:', { name, email, subject });
    return res.status(200).json({ message: 'Received (dev mode). Email not sent in development.' });
  }

  // Production-only: require credentials
  if (!EMAIL_USER || !EMAIL_PASS || !RECIPIENT_EMAIL) {
    return res.status(500).json({ error: 'Email service not configured.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    await transporter.verify();

    const mailOptions = {
      from: EMAIL_USER,
      to: RECIPIENT_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('[sendMail] Error:', error);
    return res.status(500).json({ error: error?.message || 'Failed to send email.' });
  }
}; 