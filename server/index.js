const path = require('path');
const express = require("express");
const cors = require('cors');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(cors())
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/api/contact",  bodyParser.urlencoded({ extended: false }), (req, res) => {
  console.log("req",req);
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const subject = req.body.subject;
  const mail = {
    from: email,
    to: process.env.EMAIL_ADDRESS,
    subject: subject,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  console.log(mail);
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
      console.log(mail);
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

// Showing that the server is up and running
app.listen(PORT, () => {
    console.log(`Server is online on port: ${PORT}`)
  })