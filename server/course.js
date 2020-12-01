const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    Units: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error("Negative units can't happen.")
        }
    },
    Description: {
        type: String,
    },
    Offered: {
        type: [String]
    },
    Prerequisite: {
        type: [String]
    },
    Number: {
        type: String
    },
}, {collection: 'compsci'})

const Course = mongoose.model("Course", CourseSchema)
module.exports = Course;