const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: { type: String, required: true },
  href: {
    type: String,
    default: ""
  }
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
