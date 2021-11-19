const express = require('express');
const controller = require("../controllers/board");
const route = express.Router();

route.route("/").get(controller.index);

module.exports = route;