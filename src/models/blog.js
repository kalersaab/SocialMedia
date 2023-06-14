const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    user:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('blog', userSchema);