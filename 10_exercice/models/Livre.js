const mongoose = require("mongoose");

// Schéma Livre avec validation
const livreSchema = new mongoose.Schema({
  titre: { type: String, required: true },   // obligatoire
  auteur: { type: String, required: true },  // obligatoire
  pages: { type: Number, required: true }    // obligatoire et doit être un Number
});

// Création et export du modèle
module.exports = mongoose.model("Livre", livreSchema);
