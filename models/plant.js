const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  name: {
    type: String,
    required: [true, "The name text field is required"],
  },
});

const Plant = mongoose.model("plant", PlantSchema);

module.exports = Plant;
