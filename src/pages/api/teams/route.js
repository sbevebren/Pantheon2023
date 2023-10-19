import dbConnect from "../../../utils/mongoDB";
import Team from "../../../models/team.js";

export default async function handler(req, res) {
    if(req.method == 'GET'){
        await dbConnect();
        try {
            const teams = await Team.find({});
            res.status(200).json(teams)
        } catch (error) {
            console.log(error);
        }
    }
    if(req.method == 'POST'){
        await dbConnect();
        try {
            const team = await Team.create(req.body);
            res.status(200).json(team)
            
        } catch (error) {
            res.status(500).json(error)
        }
    }

    res.status(404).json({message: 'NO API ROUTE FOUND'})
}
