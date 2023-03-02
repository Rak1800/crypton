const userschema = require("../models/userModel")


const  register=async function (req,res){

  let data=req.body
  let {name,gender,dob,city,state,pincode}=data
  if(!name) return res.send({status:false ,message :"Enter your Name"})
  if(!gender) return res.send({status:false ,message :"Enter your gender"})
  if(!dob) return res.send({status:false ,message :"Enter your dob"})
  if(!city) return res.send({status:false ,message :"Enter your city"})
  if(!state) return res.send({status:false ,message :"Enter your state"})
  if(!pincode) return res.send({status:false ,message :"Enter your pincode"})

  let saveData=await userschema.create(data) 
  saveData=saveData.toObject();
  delete saveData.password
  res.send({status:true,message:"Registration successful", data:saveData}) 
} 

const getUser=async function(req,res){
    const data =await userschema.find()
    res.send({satus:true,message:data})
}

const updateUser=async function (req,res){
    let userId=req.params.userId
    if(!userId) return res.send({status:false ,message :"provide a user Id"})
    let usercheck=await userschema.findById({_id:userId})
    if(!usercheck) return res.send({satus:false,message :"user not found"})
    let data=req.body
    const {name,gender,dob,city,state,pincode}=data
    const updateData=await userschema.findOneAndUpdate({_id:userId},{
        $set:{
            name:name,
            gender:gender,
            dob:dob,
            city:city,
            state:state,
            pincode:pincode
        }
    },{new:true})

    res.send({status:true,message:"updated",data:updateData}) 
    

}

const deleteUser=async function(req,res){
         const userId=req.params.userId

        let findUser=await userschema.findOne({_id:userId,isDeleted:false})
        if(!findUser) return res.send({status:false,message:"user not available or already deleted"})
         const deletedata=await userschema.deleteOne({_id:userId})
         res.send({status:true, message:"deleted succussfull"})
}

module.exports={register,getUser,updateUser,deleteUser} 