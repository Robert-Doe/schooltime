const mongoose=require('mongoose')

const lecturerSchema=new mongoose.Schema({
    name:String,
    dept_id:String,
    courses:Array,
    sessions:Array
})

module.exports=new mongoose.model('Lecturers',lecturerSchema)