const mongoose=require('mongoose')

const courseSchema=new mongoose.Schema({
    key:String,
    name:String,
    course_abbr:String,
    origin:String,
    credit:Number,
    details:String,
})

module.exports=new mongoose.model('Courses',courseSchema);