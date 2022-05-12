const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
    text: {
        type: String,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Scores', scoreSchema)