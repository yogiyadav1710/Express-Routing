var express=require('express')
var router=express.Router()

router.get('/placeorder',(req,res)=>{
    res.send('This is about placing the orders');
});

router.get('/cancelorder',(req,res)=>{
    res.send('This is about cancelling the order');
})

router.get('/checkorder',(req,res)=>{
    res.send('This is sbout checking the status');
});

module.exports=router;