import dbConnect from "@/utils/mongoDB";
import User from "@/models/user.js";
import { compare, hash } from 'bcryptjs';
import { randomUUID } from 'crypto';
import Security from "@/models/security";

export default async function signup(req, res) {
    await dbConnect();
    const { name, email, phone, college, password, otp } = req.body;

    if(!phone || phone.length != 10) return res.status(404).json({ 'message': 'Invalid Phone Number' });
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(validRegex)) return res.status(404).json({ 'message': 'Incorrect Email format' });

    let getotp;
    try {
        getotp = await Security.findOne({ 'email': email });
    } catch (err) {
        res.status(404).json({ 'message': 'Internal Server Error' });
    }
    if(!getotp) return res.status(404).json({ 'message': 'Email not found' });
    // console.log(getotp, otp);
    if(getotp.otp != otp) return res.status(404).json({ 'message': 'Incorrect OTP' });

    // check if already present
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
    if(existingUser) {
        return res.status(404).json({ 'message': 'User already exists' });
    }

    //generate hash
    let hashedPassword;
    try {
        hashedPassword = await hash(password, 5);
    } catch (err) {
        return res.status(404).json({ 'message': 'Error occured while hashing' });
    }

    const uuid = randomUUID();

    const pantheonid = "pantheon-" + uuid;

    const created = new User({
        name: name,
        email: email,
        phone: phone,
        password: hashedPassword,
        college: college,
        pantheonid: pantheonid,
        team: "null"
    });
    try {
        await created.save();
    } catch(err) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
    return res.status(201).json({ 'ID': pantheonid });
}