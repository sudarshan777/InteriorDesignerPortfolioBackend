const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    max: 255,
  },
  password: { type: String },
});

module.exports = model("User", userSchema);
