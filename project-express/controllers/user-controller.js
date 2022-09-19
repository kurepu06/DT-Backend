const User = require('../models/User');

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        return res.status(200).json({
            success: true,
            count: users.length,
            data: users
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting Users: ${error.message}`
        })
    }
}

exports.getUsersById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json( {
                success: false,
                error: 'User Not Found'
            })
        }
        return res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Error Getting User ${req.params.id}: ${error.message}`
        })
    }
}

exports.addUser = async (req, res, next) => {
    console.log("test addUser")
    try {
        const { firstName, lastName, email} = req.query;
        console.log("test addUse1.1")
        const user = new User({
          firstName: req.query.firstName,
          lastName: req.query.lastName,
          email: req.query.email,
          dateRegister : Date.now()
        });
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log("test addUse1")

        const savedUser = await User.create(user);
        console.log("test addUse1.2")

        return res.status(201).json({
            success: true,
            data: savedUser
        })
    } catch (error) {
        // console.log(req);
        console.log("test addUser2")

        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            console.log("test addUser3")

            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            console.log("test addUser4")

            return res.status(500).json({
                success: false,
                error: `Error Adding User: ${error.message}`
            })
        }
    }

}