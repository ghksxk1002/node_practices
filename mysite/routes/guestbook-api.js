const express = require('express');
const controller = require("../controllers/guestbook-api");

const route = express.Router();

route.route('').get(controller.read);
route.route('').post(controller.create);
route.route('/:no').delete(controller.delete);

module.exports = route;