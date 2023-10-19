import dbConnect from "@/utils/mongoDB";
import { createTransport } from "nodemailer";
import Security from "@/models/security";
import User from "@/models/user";

async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    const { email } = req.body;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(validRegex)) return res.status(404).json({ 'message': 'Incorrect Email format' });
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        return res.status(500).json({ 'message': 'Internal server Error' });
    }
    if(existingUser) return res.status(404).json({ 'message': 'User already exists' });
    const otp = Math.floor(Math.random()*1000000)

    let mailTransporter, mailDetails;
    try{
      // mailTransporter, mailDetails = mailer("pantheon.techinfo2023@gmail.com", "ksjk bkza lkjy bjbf", email, otp);
      mailTransporter = createTransport({
        service: "gmail",
        auth: {
          user: "pantheon.techinfo2023@gmail.com",
          pass: "ksjk bkza lkjy bjbf",
        },
      });
      mailDetails = {
        from: "pantheon.techinfo2023@gmail.com",
        to: email,
        subject: "Pantheon OTP",
        text: `Your OTP is ${otp.toString()}. It is valid for the next 5 minutes only.`,
      };
      await mailTransporter.sendMail(mailDetails);
    } catch (err) {
      try {
        // mailTransporter, mailDetails = mailer("pantheon.techfest2023@gmail.com", "isdj mbzm vwou xvyd", email, otp);
        mailTransporter = createTransport({
          service: "gmail",
          auth: {
            user: "pantheon.techfest2023@gmail.com",
            pass: "isdj mbzm vwou xvyd",
          },
        });
        mailDetails = {
          from: "pantheon.techfest2023@gmail.com",
          to: email,
          subject: "Pantheon OTP",
          text: `Your OTP is ${otp.toString()}. It is valid for the next 5 minutes only.`,
        };
        await mailTransporter.sendMail(mailDetails);
      } catch (err) {
        try {
          // mailTransporter, mailDetails = mailer("techinfo.pantheon@gmail.com", "peylrwxxkphhyytq", email, otp);
          mailTransporter = createTransport({
            service: "gmail",
            auth: {
              user: "techinfo.pantheon@gmail.com",
              pass: "peylrwxxkphhyytq",
            },
          });
          mailDetails = {
            from: "techinfo.pantheon@gmail.com",
            to: email,
            subject: "Pantheon OTP",
            text: `Your OTP is ${otp.toString()}. It is valid for the next 5 minutes only.`,
          };
          await mailTransporter.sendMail(mailDetails);
        } catch (err) {
          return res.status(404).json({ 'message': 'Could not send OTP' });
        }
      }
    }
    
    
    const security = new Security({
      email: email,
      otp: otp.toString()
    });
    let existingSecurity;
    try {
      existingSecurity = await Security.findOne({ email: email });
    } catch (err) {
      return res.status(500).json({ 'message': 'Internal Server Error' });
    }
    if(existingSecurity) {
      try {
        existingSecurity.otp = otp.toString();
        await existingSecurity.save();
      } catch (err) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
      }
      return res.status(201).json({ 'message': 'Success' });
    }
    try {
      await security.save();
    } catch(err) {
      return res.status(500).json({ 'message': 'Internal Server Error' });
    }
    res.status(200).json({ status: 'Success' });
  }
}
export default handler;