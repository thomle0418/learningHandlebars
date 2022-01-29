const router = require('express').Router();
const { route } = require('express/lib/router');
const { 
    createUser,
    getAllUsers,
}= require('../../../controllers/userController');

router.route('/')
    .get(getAllUsers)
    .post(createUser);

module.exports = router;