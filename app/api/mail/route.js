import nodemailer from "nodemailer";

export default function Mailer(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.PASS_KEY,
    },
  });
}
