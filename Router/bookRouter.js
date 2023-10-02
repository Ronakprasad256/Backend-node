const express = require("express");

const router = express.Router();

// const defaultCtrl = require("./controller/defaultCtrl");
const bookCtrl = require("../controller/bookCtrl");

// router.get("/", defaultCtrl.get);
router.get("/", bookCtrl.get);
router.get("/:id", bookCtrl.getById);
router.post("/create", bookCtrl.create);
router.put("/:id", bookCtrl.update);
router.patch("/:id", bookCtrl.patch);
// router.get("/health", defaultCtrl.health);

module.exports = router;