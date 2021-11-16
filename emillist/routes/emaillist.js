const express = require('express');
const controller = require('../controllers/emaillist')

const router = express.Router();
router.route('').get(controller.index);
//router.route('/add').get(controller.form); // get 으로 들어오는 /add 는 add form 보여줌
//router.route('/add').post(controller.add);

module.exports = router;




