const usermodel =  require("../models/usermodel")
const bcrypt = require("bcrypt")

const getallUser = async (req, res) => {
    try {
      
     const {name, email, password} = req.query
      const user = await usermodel.find()
      if(!user){
        res.status(200).send({message:"user is not found"})
      }
      const totalCount = await usermodel.countDocuments();
      res.status(200).send({
        message: "all customers fetch successfully",
        count: totalCount,
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  };

const signup = async (req, res) =>{
    const {name, email, password} = req.body
    try {
        const existinguser = await usermodel.findOne({email})
        if(existinguser){
            res.status(400).send("user already exist")
        }
        } catch (err) {
        console.log(err)
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    const user = await usermodel.create({name, email, password:hashedPassword})
    res.status(201).send({message:"user register successfully", data: user}) 
}

    const login = async(req, res) => {
    const {email, password} = req.body;
    try{
    const user = await usermodel.findOne({email})
    if(!user){
        res.status(404).send({Message: "user is not exist"})
    }
    res.status(200).send({message: "user login", data: user})
    }catch(err){
        console.log(err)
    }
    
    const checkPassword =await bcrypt.compareSync(password, existinguser.password)
    if(!checkPassword){
        res.status(400).send({message: "please, type correct password"})
    }
    res.status(200).send({message:"Login Successfully"})
}

const deleteuser = async (req, res)=>{
    const {email}= req.body;
    try {
        const user = await usermodel.deleteOne({email})
        res.status(200).send({message:"delete user successfully"})
    } catch (err) {
        
    }
}
module.exports = {getallUser, signup, login}
