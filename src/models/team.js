import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
    team_name:{
        type: String,
        required: true,
    },
    team_leader:{
        type: String,
        required: true,
    },
    team_score:{
        type: String,
        required: true,
    },
    join_code:{
        type: String,
        required: true,
    },
    team_members: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true,
})

const Team = mongoose.models.Team || mongoose.model('Team', TeamSchema);
export default Team;