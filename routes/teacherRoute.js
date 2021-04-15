const express = require ("express")
const { createTeacher, getALLTeachers, getSingleTeacher, updateTeacher, deleteTeacher,} = require ("../controllers/teacherController")

const router = express.Router()

router.route("/").post(createTeacher).get(getALLTeachers);
router.route("/_id").get(getSingleTeacher).put(updateTeacher).delete(deleteTeacher)

module.exports = router;