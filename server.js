const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
//   port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "bkmahapatra2k18@gmail.com",
    pass: "vgebhlvnbvsnqtdm",
  },
  secure: true,
});

// const mailData = {
//   from: "bkmahapatra2k18@gmail.com", // sender address
//   to: "bkmahapatra27@gmail.com", // list of receivers
//   subject: "Sending Email using Node.js",
//   text: "That was easy!",
//   html: "<b>Hey there! </b> <br> This is our first message sent with Nodemailer<br/>",
// };

app.post("/sendmail", (req, res) => {
  transporter.sendMail(
    {
      from: "bkmahapatra2k18@gmail.com", // sender address
      to: `${req.body.email}`, // list of receivers
      subject: "Sending Email using Node.js",
      text: "That was easy!",
      html: `<b>Hey there! </b> <br> This is ${req.body.name} <hr> ${req.body.text} years old <br/>`,
    },
    function (err, info) {
      if (err) console.log(err);
      else {
        console.log(info);
        res.send("msg sent successfully");
      }
    }
  );
});

app.listen("8080", () => {
  console.log("** server started **");
});
