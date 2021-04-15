const mongoose = require("mongoose")

const teacherSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },

}, {
    timestamps: true
})

const Teacher = mongoose.model("Teacher", teacherSchema)
module.exports =Teacher;


