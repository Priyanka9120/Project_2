const express = require ("express")
const router = express.Router()
const collegecontroller = require("../Controllers/collegecontroller")
const interncontroller =require("../Controllers/ineterncontroller")


router.get("/check", function(req,res){res.send("Hello")})


router.post("/colleges",collegecontroller.createcollege)

router.post("/interns",interncontroller.createintern)

router.get("/collegeDetails",collegecontroller.getcollege)


module.exports = router