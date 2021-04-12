const express = require("express")
const {createMember,getAllMembers, getSingleMember, updateMember, deleteMember} = require("../controllers/unionController")
const router = express.Router();

router.route("/")
.post(createMember)
.get(getAllMembers)
router.route("/:_id")
.get(getSingleMember)
.put(updateMember)
.delete(deleteMember)




module.exports=router;