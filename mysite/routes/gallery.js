const express = require('express');
const controller = require("../controllers/gallery");
const route = express.Router();

route.route("/").get(controller.index);
route.route("/upload").post(controller.upload);
route.route("/delete/:no").get(controller.delete);


module.exports = route;