import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

interface Data {
    successful: boolean;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
          user: process.env.GMAILUSER,
          pass: process.env.GMAILPASS
        }
      });

      try {
        await transporter.sendMail({
            from:'"TedCounter"<tedcounter@gmail.com>',
            to: req.body.email,
            subject: `New Tedly Request - ${req.body.name}`,
            html: 
            `
            <h1>Tedly Request</h1>
            <h4>Name: ${req.body.name}<h4>
            <h4>Business: ${req.body.business}<h4>
            <h4>Email: ${req.body.email}<h4>
            <h4>Message:<h4>
            <p>${req.body.message}</p>
            `
        });
      } catch (error) {
        res.status(400).json({successful: false});
      }

    console.warn("Email Sent")
    console.log(req.body);
    res.status(200).json({successful: true});
}