const { model, Schema } = require("mongoose");

const testimonialSchema = new Schema({
  name: String,
  email: String,
  project: String,
  comment: String,
});

module.exports = model("Testimonial", testimonialSchema);
