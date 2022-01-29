const router = require('express').Router();
const { route } = require('express/lib/router');
const { 
    createUser,
    getAllUsers,
    getUserById,
}= require('../../../controllers/userController');

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:userId')
    .get(getUserById);

module.exports = router;