const blog = require("../models/blog")

const allblog = async (req, res)=>{
    const blogs = await blog.find()
    res.status(200).send({message:"all blogs fetched successfully", data: blogs})
}
const Add = async (req, res) =>{
    try {
        const blogs = await blog.create(req.body)
        res.status(200).send({message:"blog is created successfully", data: blogs})
        
    } catch (err) {
        
    }
}
module.export = {allblog, Add}