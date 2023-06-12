const express = require('express')
const router = express.Router();

router.get('/inicio',(req,res)=>{
    const jsonData=require('../habitaciones.json');
    res.json(jsonData)
});


module.exports = router