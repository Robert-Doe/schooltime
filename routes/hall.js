const express = require('express')
const router = express.Router()
const Hall=require('../model/hall')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

/*Retrieving all Halls*/
router.get('/', function (req, res) {
    res.send('Display All Halls')
})

/*Retrieving a Hall By Id*/
router.get('/:id',(req,res)=>{
    res.send(`Display hall with respect to its ${req.params.id}`)
})

/*Retrieving a Hall By Id*/
router.delete('/:id',(req,res)=>{
    res.send(`Delete hall with respect to its ${req.params.id}`)
})

/*Updating a Hall By Id*/
router.put('/:id',(req,res)=>{
    res.send(`Update hall with respect to its ${req.params.id}`)
})


/*Adding a New Hall*/
router.post('/', function (req, res) {
    res.send('Add New Hall')
})

module.exports = router