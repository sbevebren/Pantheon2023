import mongoose from "mongoose";
import User from "@/models/user";
import Team from "@/models/team";
import dbConnect from "@/utils/mongoDB";

export default async function remove(req, res, next) {
    await dbConnect();
    const { teamid, email } = req.body;
    let user, team;
    try {
        user = await User.findOne({ email: email });
        team = await Team.findOne({ teamid: teamid });
    } catch (err) {
        res.status(500).json({ 'messsage': 'Internal Server Error' });
    }
    if(!user || !team) res.status(404).json({ 'message': 'Not found' });
    if(!user.team) res.status(201).json({ 'ID': -1 });
    let members = []
    team.team_members.length > 0 && team.team_members.map((member) => {
        if(member != user._id) members.push(member);
    })
    user.team = false;
    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        team.team_members = members;
        await team.save({ session: sess });
        await user.save({ session: sess });
        await sess.commitTransaction();
    } catch (err) {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
    res.status(201).json({ 'ID': teamid });
}