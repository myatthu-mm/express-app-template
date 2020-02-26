import mongoose from 'mongoose';

// Setup schema
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// Export model
const User = mongoose.model('user', userSchema)

export default User