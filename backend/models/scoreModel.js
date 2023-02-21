const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    gameType: {
        type: String,
        required: [true, 'Please add a gameType value']
    },
    highScore: {
        type: Number,
        required: true,
        default: 0,
    }

}, {
    timestamps: true
})


module.exports = mongoose.model('Score', scoreSchema)