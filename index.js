const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (you may not need this depending on your setup)
app.use(express.static('arpit'));

// Simple form HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/arpit/index.html');
});

// Form submission route
app.post('/submit', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mosquitoshield43@gmail.com', // Your Gmail email address
            pass: 'hlwh zmio fyor czbs' // Your Gmail password or an app-specific password
        }
    });

    // Email content
    const mailOptions = {
        from: 'mosquitoshield43@gmail.com',
        to: 'arpitsharmably18@gmail.com', // Your email address where you want to receive the form data
        subject: subject, // Use the subject from the form
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error(error);
        }
        console.log('Email sent:', info.response);
    });

    res.sendFile(__dirname + '/arpit/thanks.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
