const mongoose = require("mongoose");

//export du Modele 
const PostsModel = mongoose.model(
  "node-api",
  {
    msg: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  "voiture"
);

module.exports = { PostsModel };