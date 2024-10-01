const express = require("express");
const router = express.Router();
const scrapController = require("../controllers/scrapController");

router.get("/", scrapController.getmain);

module.exports = router;
