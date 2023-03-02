const mongoose= require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
    city:{
       type:String,
      require:true
    }, 
    state:{
        type:String,
        require:true
    },
    pincode:{
        type:String,
        require:true
     }
 

    
},{timestamps:true})

module.exports=mongoose.model('User',userSchema)