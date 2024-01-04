// sendEmail.js
const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail', // Specify the email service provider
  auth: {
    user: 'your-email@gmail.com', // Replace with your Gmail address
    pass: 'your-password' // Replace with your Gmail password or an app-specific password
  }
});

// Email options
const mailOptions = {
  from: 'your-email@gmail.com', // Sender address
  to: 'friend-email@example.com', // Receiver address
  subject: 'Hello from Nodemailer', // Subject line
  text: 'This is a test email sent from Node.js using Nodemailer.' // Plain text body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
