const express=require('express')
const router=express.Router();

router.get('/getproducts',(req,res)=>{
    var products=['iphone','oneplusT','samsung note5']
    res.send(products);
});

router.get('/addproduct',(req,res)=>{
    res.send('This is about adding products')
});

router.get('/editproduct',(req,res)=>{
    res.send('This is about editing the product')
})

module.exports=router;