const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please add an email"],
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('User', userSchema)





// Some login stuff:
// email asdef
// password asd
// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjNmNTVlYzgwZGNjOGI2Nzg4NjVkNiIsImlhdCI6MTY3Njk0NDYyNiwiZXhwIjoxNjc5NTM2NjI2fQ.fvNP6Z_BF0eWHDmXS8nYjvzSAQsAdGGGwbQvkYQ3uus

// email someotheremail
// password 12345
// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjQxZTVkMDM4NzQ5MTgxYjViY2Q4NCIsImlhdCI6MTY3Njk0NDkxOSwiZXhwIjoxNjc5NTM2OTE5fQ.n96DA_WhyBR0wK_msIPZj4uar-1wypM5Jo4rSlTsKnk