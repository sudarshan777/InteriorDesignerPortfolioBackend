const { model, Schema } = require("mongoose");

const livingAreaSchema = new Schema({
  name: String,
  description: String,
  pictureUrl: String,
});

module.exports = model("LivingArea", livingAreaSchema);
