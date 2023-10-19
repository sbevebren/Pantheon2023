import mongoose from "mongoose";
import User from "@/models/user";
import Team from "@/models/team";
import dbConnect from "@/utils/mongoDB";

export default async function add(req, res, next) {
    await dbConnect();
    const { join_code, pantheonid } = req.body;
    let user, team;
    try {
        user = await User.findOne({ pantheonid: pantheonid });
        team = await Team.findOne({ join_code: join_code });
    } catch (err) {
        return res.status(500).json({ 'messsage': 'Internal Server Error' });
    }
    if(!user || !team) return res.status(404).json({ 'message': 'Not found' });
    if(team.team_members.length >= 8) return res.status(400).json({ 'message': 'Team filled' });
    if(user.team != "null") return res.status(404).json({ 'message': 'User aleady in a team' });
    user.team = join_code;
    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        team.team_members.push(user);
        await team.save({ session: sess });
        await user.save({ session: sess });
        await sess.commitTransaction();
        
    } catch (err) {
        return res.status(500).json({ 'message': 'Internal Server Error' });
    }
    return res.status(201).json({ "team": join_code });
}