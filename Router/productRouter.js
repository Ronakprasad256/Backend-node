const express = require("express");
const router = express.Router();
const productCtrl = require("../controller/productCtrl");
const auth = require("../middleWare/auth")

router.get("/page/:page/size/:size", auth.authenticate, productCtrl.getAll);
router.get("/", productCtrl.getAll);
router.post("/create", productCtrl.addProduct);
router.get("/:id", productCtrl.singleProduct);
router.put("/update/:id", productCtrl.fullUpdate);
router.patch("/update/:id", productCtrl.partialUpdate);
router.delete("/delete/:id", productCtrl.deleteProduct);

module.exports = router;