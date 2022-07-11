const express = require('express');
const router = express.Router();


/**Toy Car Controller */
const { getUsers, getUsersById, addUser} = require('../controllers/user-controller');

router
    .route('/')
    .get(getUsers)
    .post(addUser)

router 
    .route('/:userId')
    .get(getUsersById)

module.exports = router;