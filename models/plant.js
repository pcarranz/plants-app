const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name text field is required"],
  },
  type: {
    type: String,
    required: [true, "The type text field is required"],
  },
  care: {
    type: String,
  },
});

const Plant = mongoose.model("plant", PlantSchema);

module.exports = Plant;
