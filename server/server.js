const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb' }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

function sendEmail({ name, email, message }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'portfolioemail11@gmail.com',
        pass: 'mfgpilirkmjyachw',
      },
    });

    const mail_configs = {
      from: 'portfolioemail11@gmail.com',
      to: email,
      subject: `${name} sent you a message from the portfolio website.`,
      text: message,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      }
      return resolve({ message: 'Email sent succesfuly' });
    });
  });
}

app.get('/', (req, res) => {
  res.send('Nodemailer server is running!');
});

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all the fields.' });
  }
  sendEmail({ name, email, message })
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`nodemailer is listening at http://localhost:${port}`);
});
