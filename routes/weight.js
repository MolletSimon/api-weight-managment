const express = require('express');
const router = express.Router();
const weightCtrl = require('../controllers/weight');
const auth = require('../middleware/auth');

//post
router.post('/' , weightCtrl.addWeight);

//put
router.put('/:id', auth, weightCtrl.modifyWeight);

//delete
router.delete('/:id', auth, weightCtrl.deleteWeight);

//get
router.get('/:id', auth, weightCtrl.getOneWeight);
router.get('/', auth, weightCtrl.getAllWeight);
router.get('/user/:userId', auth, weightCtrl.getAllWeightByUser);

module.exports = router;
