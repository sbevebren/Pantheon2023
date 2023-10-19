import dbConnect from "@/utils/mongoDB";
import User from "@/models/user.js";
import Team from "@/models/team";
import { randomUUID } from 'crypto';
import mongoose from "mongoose";

export default async function create(req, res) {
    if(req.method != 'POST') return res.status(404).json({ 'message': "Incorrect request" });
    await dbConnect();
    const { pantheonid, team_name } = req.body;

    let user;
    try {
        user = await User.findOne({ pantheonid: pantheonid });
    } catch (err) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
    if(!user) return res.status(404).json({ 'message': 'User does not exists' });

    if(user.team != "null") return res.status(404).json({ 'message': 'User already in a team' });
    const code = randomUUID();
    const members = [];
    members.push(user);
    user.team = code;
    const created = new Team({
        team_name: team_name,
        team_leader: user.pantheonid,
        team_score: 0,
        join_code: code,
        team_members: members
    });
    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await created.save({ session: sess });
        await user.save({ session: sess });
        await sess.commitTransaction();
    } catch(err) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
    return res.status(201).json({ 'join_code': code });
}