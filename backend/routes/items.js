const express = require("express");
const router = express.Router();

const itemsCtrl = require("../controllers/items");

router.get("/", itemsCtrl.getAllItems);
router.get("/:_id", itemsCtrl.getOneItem);

module.exports = router;
