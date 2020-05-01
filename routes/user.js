const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/modify-infos/:user', userCtrl.modifyUserInfos);
router.get('/', auth, userCtrl.getAllUsers);
router.get('/:user', auth, userCtrl.getOneUser);

module.exports = router;