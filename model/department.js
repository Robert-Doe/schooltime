const mongoose=require('mongoose')

const departmentSchema=new mongoose.Schema({
    details:String,
    course_info:Array,
    dept_abbr:String,
    lecturers:Array
})

module.exports=new mongoose.model('Departments',departmentSchema);