const express = require('express')
const router = express.Router()
const Course=require('../model/course');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

/*Retrieving all Courses*/
router.get('/', function (req, res) {
    res.send('Display All Courses')
})

/*Retrieving a Course By Id*/
router.get('/:id',(req,res)=>{
    res.send(`Display course with respect to its ${req.params.id}`)
})

/*Retrieving a Course By Id*/
router.delete('/:id',(req,res)=>{
    res.send(`Delete course with respect to its ${req.params.id}`)
})

/*Updating a Course By Id*/
router.put('/:id',(req,res)=>{
    res.send(`Update course with respect to its ${req.params.id}`)
})


/*Adding a New Course*/
router.post('/', function (req, res) {
    res.send('Add New Course')
})

module.exports = router