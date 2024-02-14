const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Post schema
const postSchema = new Schema({
  imageText: {
    type: String,
    required: true
  },
  image:{
    type: String,
  },
  user:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Array,
    default: [],
  }
});

// Define Post model
module.exports = mongoose.model('Post', postSchema);


