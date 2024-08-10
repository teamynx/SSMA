import mongoose from 'mongoose';

const SpaceCraftSchema = new mongoose.Schema({
    id:{
        type: 'number',
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    failureCause: {
        type: String,
        required: false
    },
    precautions: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['SUCCESS', 'FAILURE','UNKNOWN'],
        required: true
    }
});

const SpaceCraft = mongoose.model("SpaceCraft", SpaceCraftSchema);

export default SpaceCraft;
