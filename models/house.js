const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("House", houseSchema);
