const mongoose = require("mongoose");

const auteurSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model("Auteur", auteurSchema);
