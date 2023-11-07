import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    is_delete: {
        type: Boolean,
        required: true
    },
    is_complete: {
        type: Boolean,
        required: true
    },
}, { timestamps: true});

export const TaskModel = mongoose.model('Task', taskSchema);