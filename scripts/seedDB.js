const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/tensorflow"
);

const songSeed = [
  {
    href: "https://www.youtube.com/watch?v=zdngjh5cy5E",
    title: "Sad Songs "
  },
  {
    href: "https://www.youtube.com/watch?v=vP_Bi4z65Wk",
    title: "Happy Songs "
  }
  
];

db.Song
  .remove({})
  .then(() => db.Song.collection.insertMany(songSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
