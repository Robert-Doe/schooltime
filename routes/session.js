const express = require('express')
const router = express.Router()
const Session=require('../model/session');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})


/*Retrieving all Sessions*/
router.get('/', function (req, res) {
    res.send('Display All Sessions')
})

/*Retrieving a Session By Id*/
router.get('/:id',(req,res)=>{
    res.send(`Display session with respect to its ${req.params.id}`)
})

/*Retrieving a Session By Id*/
router.delete('/:id',(req,res)=>{
    res.send(`Delete session with respect to its ${req.params.id}`)
})

/*Updating a Session By Id*/
router.put('/:id',(req,res)=>{
    res.send(`Update session with respect to its ${req.params.id}`)
})


/*Adding a New Session*/
router.post('/', function (req, res) {
    res.send('Add New Session')
})
module.exports = router