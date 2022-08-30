var express=require('express');
var router=express.Router()

router.get('/checkusers',(req,res)=>{
    res.send('This is about checking the users');
})

router.get('/checkorders',(req,res)=>{
    res.send('This is about checking orders');
})

module.exports=router;