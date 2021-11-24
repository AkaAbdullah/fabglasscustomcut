const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
    },
    date: {
        type: String,
        required: true
    }
})
module.exports = mongoose.models.Task || mongoose.model('Task', TaskSchema);