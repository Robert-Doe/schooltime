const mongoose=require('mongoose')

const hallSchema = new mongoose.Schema({
    key:String,
    location:String,
    capacity:Number,
    type:String,
    detail:String,
    sessions:Array
})

module.exports=new mongoose.model('Halls',hallSchema)