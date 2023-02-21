const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('../models/userModel')


// @desc:       Authenticate a user
// @route:      POST /api/users
// @access:     public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    //Check for user email
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
    
})


// @desc:       Register a user
// @route:      POST /api/users
// @access:     private (eventually)
const registerUser = asyncHandler(async (req, res) => {
    
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check is user esists
    const userExists = await User.findOne({email})
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name: name,
        email: email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})


// @desc:       Get me
// @route:      GET /api/users/me
// @access:     private (eventually)
const getMe = asyncHandler(async (req, res) => {
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({id: _id, name, email})

})


const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    loginUser,
    registerUser,
    getMe,
}









// // @desc:       Update a user
// // @route:      POST /api/goals
// // @access:     private (eventually)
// const updateUser = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.id);

//     if (!user) {
//         res.status(400);
//         throw new Error('User not found')
//     }
    
//     console.log(req.body.scores);

//     const updatedUser = await User.findByIdAndUpdate(req.params.id, {scores: JSON.parse(req.body.scores)}, {new: true})

//     res.status(200).json(updatedUser)
// })


// // @desc:       Delete a specific user
// // @route:      DELETE /api/goals
// // @access:     private (eventually)
// const deleteUser = asyncHandler(async (req, res) => {

//     const user = await User.findById(req.params.id);

//     if (!user) {
//         res.status(400);
//         throw new Error('User not found')
//     }

//     await user.remove()
//     res.status(200).json({ id: req.params.id })
// })

