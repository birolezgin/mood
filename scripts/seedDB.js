const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/tensorflow"
);

const songSeed = [
  {
    title: "Sad Songs",
    href: "https://www.youtube.com/watch?v=zdngjh5cy5E",
  },
  
  {
    title: "Happy Songs",
    href: "https://www.youtube.com/watch?v=zdngjh5cy5E",
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
