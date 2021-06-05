const mongoose = require("mongoose");

const bootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the name"],
  },
  rating: {
    type: Number,
    required: [true, "please enter the rating"],
  },
  description: {
    type: String,
    required: [true, "please enter the description"],
  },
  price: {
    type: Number,
    required: [true, "please enter the price"],
  },
});

const bootcamp = mongoose.model("bootcamp", bootcampSchema);

module.exports = bootcamp;
