const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 5000;

// function sendEmail() {
//   return new Promise((resolve, reject) => {
//     var transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'portfolioemail11@gmail.com',
//         pass: 'mfgpilirkmjyachw'
//       }
//     });

//     const mail_configs = {
//       from: myemail,
//       to: recipient_email,
//       subject: 'Website Email Form Test',
//       text: 'Checking if it works'
//     };
//     transporter.sendMail(mail_configs, function (error, info) {
//       if (error) {
//         console.log(error);
//         return reject({ message: `An error has occured` });
//       }
//       return resolve({ message: 'Email sent succesfuly' });
//     });
//   });
// }

app.get('/', (req, res) => {
  sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});
