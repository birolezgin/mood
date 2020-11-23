const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the songs below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/tensorflow"
);
const songSeed = [
  {
    title: "Sad Songs",
    href: "https://www.youtube.com/watch?v=y3c4H1CUPT4&feature=youtu.be",
  },
  {
    title: "Happy Songs",
    href: "https://www.youtube.com/watch?v=E07s5ZYygMg&feature=youtu.be",
  }
];
db.Song
  .remove({})
  .then(() => db.Song.insertMany(songSeed))
  .then(data => {
    console.log(data + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });