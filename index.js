const express = require('express');
const app = express();
const cors=require('cors')
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const departmentRouter= require('./routes/department');
const lecturerRouter= require('./routes/lecturer')
const pairingRouter= require('./routes/pairing');
const sessionRouter= require('./routes/session');
const hallRouter= require('./routes/hall');
const courseRouter= require('./routes/course')
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/*+json' }))

const mongoDB = process.env.ATLAS_URI;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/departments',departmentRouter);
app.use('/lecturers',lecturerRouter);
app.use('/sessions',sessionRouter);
app.use('/pairings',pairingRouter);
app.use('/halls',hallRouter);
app.use('/courses',courseRouter);


app.listen(9999,()=>{
    console.log("I am listening to port 9999")
})