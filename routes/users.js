const mongoose = require('mongoose');

const plm = require("passport-local-mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/yotubapp");

const Schema = mongoose.Schema;

// Define User schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  
  },
  profileImage:{
     type:String,

  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Post"
  }],
  dp:{
    type:String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true
  }
});

userSchema.plugin(plm);

// Define User model
module.exports = mongoose.model('User', userSchema);

 
