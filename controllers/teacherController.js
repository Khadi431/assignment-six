const Teacher = require("../models/teacherSchema")

const createTeacher = async (req, res) =>{
    const newTeacher = new Teacher({
        name: "ama",
        age: 9,

    })
    await newTeacher.save()
    res.status(201).json(newTeacher)
}

const getALLTeachers =async (req, res) =>{
    const Teacher = await Teacher.find();
    res.json(Teacher);
}
const getSingleTeacher =async (req, res) =>{
    const Teacher = await Teacher.findById(req.params._id);
    res.json(Teacher);
}
const updateTeacher =async (req, res) =>{
    const foundTeacher = await Teacher.findById(req.params._id);
    if (foundTeacher){
        (foundTeacher.name=req.body.name ? req.body.name:foundTeacher.name)
        (foundTeacher.age=req.body.age ? req.body.age:foundTeacher.age)

        const updatedTeacher =await foundTeacher.save();
        res.json({updatedTeacher});
    }
    
};

const deleteTeacher = async (req, res) =>{
    const foundTeacher =await Teacher.findById(req.params._id);
    if (foundTeacher){
        foundTeacher.remove();
        res.json({msg: `${foundTeacher.name}remove`});

    } else{
        res.status(404).json({error: "Teacher not found"});

    }
}



module.exports={createTeacher, getALLTeachers, getSingleTeacher, updateTeacher, deleteTeacher }