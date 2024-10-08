import { NextResponse } from "next/server";
import Transporter from "@/app/helper/Transporter";

export async function POST(req) {
  const { to } = await req.json(); 
  const transporter = await Transporter();

  const Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Congratulations!</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .container {
              width: 100%;
              max-width: 600px;
              margin: auto;
              background: white;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          h1 {
              color: #4CAF50;
              text-align: center;
          }
          p {
              line-height: 1.6;
          }
          .quote {
              font-style: italic;
              color: #555;
              margin-top: 20px;
          }
          .quote:hover {
            color: black;
          }
          .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 14px;
              color: #777;
          }
          .footer a {
              color: #fff;
              text-decoration: none;
              background: green;
              padding: 10px;
              border-radius: 4px;
          }
          #impText {
            color: blue;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>Congratulations!</h1>
          <p>Dear participant,</p>
          <p>Thank you! Your submission has been successfully received 🎉</p>
          <p>Thank you for your effort and dedication. "<span id="impText">we are currently processing your submission</span>". Please wait for the results, which will be shared with you shortly.</p>
          
          <p class="quote">“Success is not final; failure is not fatal: It is the courage to continue that counts.” — Winston S. Churchill</p>

          <p class="footer">
              <a href="https://www.yourwebsite.com">Your Website</a>
          </p>
      </div>
  </body>
  </html>`;

  const Options = {
    from: `sri sairam college <${process.env.MAIL_ID}>`,
    to: to,
    subject: "📄✨ Paper Submitted Successfully! 🎉",
    html: Template,
  };

  try {
    await transporter.sendMail(Options);
    return NextResponse.json(
      {
        message: "mail sent successfully 🎉",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        message: "failed to send mail",
      },
      { status: 500 }
    );
  }
}
