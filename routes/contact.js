


const express = require('express');

const router = express.Router();

//get request

router.get('/',(req,res)=>{
    res.send("Get all contact")
})



// post request
router.post('/',(req,res)=>{
    res.send('Add contact')
})


//put request
router.put('/:id',(req,res)=>{
    res.send('Update contact')
})

//delete request
router.delete('/:id',(req,res)=>{
    res.send('Delete contact')
})


module.exports = router;