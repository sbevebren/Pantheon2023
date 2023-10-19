import dbConnect from "@/utils/mongoDB";
import User from "@/models/user.js";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
    if(req.method == "POST"){
        try {
            await dbConnect();
            const body = req.body;
            const users = await User.create(body);
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({ success: "server error" });
        }
    }
    if(req.method == "GET"){
        try {
            await dbConnect();
            const users = await User.find({});
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({ success: "server error" });
        }
    }

    res.status(404).json({message: 'NO API ROUTE FOUND'})
}