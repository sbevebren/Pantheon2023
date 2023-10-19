import mongoose from 'mongoose';

const SecuritySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Security = mongoose.models.Security || mongoose.model('Security', SecuritySchema);
export default Security;