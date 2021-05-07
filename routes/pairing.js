const express = require('express');
const router = express.Router();
const Pairing = require('../model/pairing');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next()
});

/*Retrieving all Pairings*/
router.get('/', function (req, res) {
    res.send('Display All Pairings')
});

/*Retrieving a Pairing By Id*/
router.get('/:id', (req, res) => {
    res.send(`Display pairing with respect to its ${req.params.id}`)
});

/*Retrieving a Pairing By Id*/
router.delete('/:id', (req, res) => {
    res.send(`Delete pairing with respect to its ${req.params.id}`)
});

/*Updating a Pairing By Id*/
router.put('/:id', (req, res) => {
    res.send(`Update pairing with respect to its ${req.params.id}`)
});


/*Adding a New Pairing*/
router.post('/', function (req, res) {
    const lecturer = new Pairing({"lecturer_id": req.body.lecturer_id, "course_id": req.body.course_id});
    small.save(function (err) {
        if (err) return handleError(err);
        // saved!
    });


    res.send('Add New Pairing')
});

module.exports = router;