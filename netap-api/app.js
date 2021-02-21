const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('port 3000 is ready');
});

app.get('/', (req, res) => {
  res.send('');
});

app.post('/sendmail', (req, res) => {
  console.log('test');
  let data = req.body;
  sendMail(data);
});

async function sendMail(data) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'mehranmb78@gmail.com', // generated ethereal user
      pass: 'MBmemob1923', // generated ethereal password
    },
  });
  console.log(data);
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'mehranmb78@gmail.com', // sender address
    to: 'mehranmb99@outlook.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: `<p>${JSON.stringify(data)}</p>`, // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
