const express = require('express');
const controller = require("../controllers/guestbook");
const route = express.Router();

route.route("/").get(controller.index)
route.route("/add").post(controller.add)
route.route("/spa").get(controller.spalanding)


module.exports = route;