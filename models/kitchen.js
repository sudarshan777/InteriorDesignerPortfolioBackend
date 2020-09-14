const { model, Schema } = require("mongoose");

const kitchenSchema = new Schema({
  name: String,
  description: String,
  pictureUrl: String,
});

module.exports = model("Kitchen", kitchenSchema);
