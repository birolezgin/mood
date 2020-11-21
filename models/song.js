const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
 
  
  href: {
    type: String,
    default: "",
    unique: true
  },
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
