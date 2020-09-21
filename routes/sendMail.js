const router = require("express").Router();
const creds = require("../config");
const nodemailer = require("nodemailer");

router.post("/", (req, res, next) => {
  // create reusable transporter object using the default SMTP transport

  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const subject = req.body.subject;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: creds.USER,
      pass: creds.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: `<${email}>`,
    to: "<sudarshan.shubham@gmail.com>",
    subject: `${subject}`,
    text: `${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(400).json("error: " + error);
    } else {
      res.json({ error: "Message sent" });
      console.log("Message sent :%s", info.messageId);
    }
  });
});

module.exports = router;
