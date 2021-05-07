const express = require('express')
const router = express.Router()
const Department=require('../model/department')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})


/*router.post('/',(req,res)=>{
    if(req.body) {
        const {details, department_info, depart_abbr, lecturers} = {... JSON.parse(req.body)}
    }
    const newDepartment=new Department({
        details,department_info,dept_abbr,lecturers
    })
    newDepartment.save((err,success)=>{
        if(err)
            return res.status(400).json({msg:"Cannot insert"});
        res.json(success)
    })
    //res.send('Add new Department from BODY')
})*/


/*Retrieving all Departments*/
router.get('/', function (req, res) {
    res.send('Display All Departments')
})

/*Retrieving a Department By Id*/
router.get('/:id',(req,res)=>{
    res.send(`Display department with respect to its ${req.params.id}`)
})

/*Retrieving a Department By Id*/
router.delete('/:id',(req,res)=>{
    res.send(`Delete department with respect to its ${req.params.id}`)
})

/*Updating a Department By Id*/
router.put('/:id',(req,res)=>{
    res.send(`Update department with respect to its ${req.params.id}`)
})


/*Adding a New Department*/
router.post('/', function (req, res) {
    res.send('Add New Department')
})


module.exports = router