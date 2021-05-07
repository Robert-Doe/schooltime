const express = require('express')
const router = express.Router()
const lecturer=require('../model/lecturer')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

/*Retrieving all Lecturers*/
router.get('/', function (req, res) {
    res.send('Display All Lecturers')
})

/*Retrieving a Lecturer By Id*/
router.get('/:id',(req,res)=>{
    res.send(`Display lecturer with respect to its ${req.params.id}`)
})

/*Retrieving a Lecturer By Id*/
router.delete('/:id',(req,res)=>{
    res.send(`Delete lecturer with respect to its ${req.params.id}`)
})

/*Updating a Lecturer By Id*/
router.put('/:id',(req,res)=>{
    res.send(`Update lecturer with respect to its ${req.params.id}`)
})


/*Adding a New Lecturer*/
router.post('/', function (req, res) {
    res.send('Add New Lecturer')
})


module.exports = router