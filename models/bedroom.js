const { model, Schema } = require("mongoose");

const bedroomSchema = new Schema({
  name: String,
  description: String,
  pictureUrl: String,
});

module.exports = model("Bedroom", bedroomSchema);
