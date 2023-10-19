import User from "@/models/user";
import Team from "@/models/team";
import dbConnect from "@/utils/mongoDB";

export default async function team(req, res, next) {
    await dbConnect();
    const { teamid } = req.body;
    console.log(teamid);
    let tm;
    try {
        tm = await Team.findOne({ teamid: teamid });
    } catch (err) {
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
    if(!tm) res.status(404).json({ 'message': 'Not found' });
    let members = [];
    tm.team_members.length > 0 && tm.team_members.map(async (member) => {
        let user;
        try {
            user = await User.findById(member);
        } catch (err) {
            res.status(500).json({ 'message': 'Internal Server Error' });
        }
        members.push(user);
    })
    res.status(201).json({ 'team': tm, 'users': members });
}