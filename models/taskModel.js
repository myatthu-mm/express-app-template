import mongoose from 'mongoose';

// Setup schema
const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

// Export model
const Task = mongoose.model('task', taskSchema)

export default Task