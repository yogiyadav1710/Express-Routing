var express=require('express')
var app=express()
var userroute=require('./routes/users')
var productroute=require('./routes/products')
var orderroute=require('./routes/orders')
var adminroute=require('./routes/admin')

app.use('/users',userroute)
app.use('/product',productroute)
app.use('/orders',orderroute)
app.use('/admin',adminroute)

app.listen(5000,()=>{
    console.log('Server started on port 5000')
})