const mongoose=require('mongoose')

const sessionSchema=new mongoose.Schema({
    course_id:String,
    lecture_id:String,
    hall_id:String,
    period:String,
    day:Number,
    key:String
})

module.exports=new mongoose.model('Sessions',sessionSchema)