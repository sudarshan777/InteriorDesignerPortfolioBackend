const { model, Schema } = require("mongoose");

const bathroomSchema = new Schema({
  name: String,
  description: String,
  pictureUrl: String,
});

module.exports = model("Bathroom", bathroomSchema);
