// URL PATH
const express = require("express")
const {home, createuser, getuser, edituser, deleteuser} = require("../controllers/usercontrollers")
const router = express.Router()

router.get("/", home)
router.post("/createuser", createuser)
router.get("/getuser", getuser)
router.put("/edituser/:id", edituser)
router.delete("/deleteuser/:id", deleteuser)


module.exports = router