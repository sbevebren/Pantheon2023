import mongoose from 'mongoose';

const MerchandiseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    hostel_number: {
        type: String,
    },
    room_number: {
        type: String,
    }
}, {
    timestamps: true,
})

const Merchandise = mongoose.models.Merchandise || mongoose.model('Merchandise', MerchandiseSchema);
export default Merchandise;