const express = require("express");
const multerConfig = require("./config/multer");
const upload = require("multer")(multerConfig);

const routes = express.Router();

// Controller
const FantasyController = require("./app/controllers/FantasyController");
const FileController = require("./app/controllers/FileController");

routes.get("/files/:file", FileController.show);

routes.get("/", FantasyController.index);

routes.get("/show/:id", FantasyController.show);

routes.get("/store", FantasyController.form);
routes.post("/store", upload.single("image"), FantasyController.store);

module.exports = routes;
