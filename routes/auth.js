


const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    console.log('Get logged in user')
})



router.post('/',(req,res)=>{
    res.send('get log a user')
})
module.exports = router;