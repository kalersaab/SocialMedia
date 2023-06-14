const express = require("express")
const router = express.Router();
const userctrl = require("../controllers/userctrl")
router.get("/users", userctrl.getallUser)
router.post("/signup", userctrl.signup)
router.get("/login", userctrl.login)
module.exports = router;