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
    try {
        const { firstName, lastName, email} = req.body;
        const user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          dateRegister : Date.now()
        });

        const savedUser = await User.create(user);
        return res.status(201).json({
            success: true,
            data: savedUser
        })
    } catch (error) {
        console.log(req);

        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: `Error Adding User: ${error.message}`
            })
        }
    }

}