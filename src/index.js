const express=require('express');
const mongoose =require('mongoose');
const bodyParser=require('body-parser')
const route=require('./routes/routers')



const app=express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

  
mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://Rak18000:Rakesh123@cluster0.xntrj.mongodb.net/Crypton',{
    useNewUrlParser:true
}).then(()=>console.log('mongoDb is connected')) 
.catch(err=>console.log(err))

app.use('/', route)   


 
app.listen(5000,()=>console.log('express is running on port '+(5000)))      