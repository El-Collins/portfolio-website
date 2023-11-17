import express from 'express';
const nodemailer = require("nodemailer");
import { json, urlencoded } from 'body-parser';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 3000,
  service: 'gmail',
  secure: true,
  auth: {
    user: 'charlescollins476@gmail.com', // replace with your email
    pass: 'Favourboy1998@$', // replace with your email password
  },
});

// Define route for handling form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create email content
  const mailOptions = {
    from: email,
    to: 'charlescollins476@gmail.com', // replace with your email
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent:', info.response);
  });

  res.send('Form submitted successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
