import dbConnect from "@/utils/mongoDB";
import User from "@/models/user.js";
import { compare } from "bcryptjs";

export default async function signin(req, res) {
    await dbConnect();
    const { email, password } = req.body;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(validRegex)) return res.status(404).json({ 'message': 'Incorrect Email format' });
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
    if(!existingUser) return res.status(400).json({ 'message': 'User not found' });
    if(await compare(password, existingUser.password)) return res.status(201).json({ 'ID': existingUser.pantheonid, 'name': existingUser.name, 'code': existingUser.team });
    return res.status(401).json({ 'message': 'Incorrect Credentials' });
}