const { register, getUser, updateUser, deleteUser } = require('../controllers/userController')

const router =require('express').Router()

router.post("/register",register) 
router.get("/users",getUser)
router.put("/updateuser/:userId",updateUser)   
router.delete("/deleteuser/:userId",deleteUser) 

module.exports=router