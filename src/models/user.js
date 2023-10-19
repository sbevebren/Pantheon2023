import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    pantheonid: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    college:{
        type: String,  
        required: true,
    },
    team: {
        type: String
    }
},{
    timestamps: true,
})

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;