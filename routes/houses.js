const express = require("express");
const router = express.Router();

const housesCtrl = require("../controllers/houses");

router.get("/", housesCtrl.index);

router.post("/", housesCtrl.create);
router.get("/new", housesCtrl.new);
router.get("/:id", housesCtrl.show);

module.exports = router;
