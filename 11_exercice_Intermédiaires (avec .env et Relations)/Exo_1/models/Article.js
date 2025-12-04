const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  contenu: { type: String },
  auteur: { type: mongoose.Schema.Types.ObjectId, ref: "Auteur" }
});

// --- Méthode d'instance ---
// Cette méthode sera disponible sur chaque document Article
articleSchema.methods.resume = function() {
  const extrait = this.contenu ? this.contenu.substring(0, 50) : "";
  return `${this.titre} : ${extrait}${this.contenu && this.contenu.length > 50 ? "..." : ""}`;
};

// --- Méthode statique ---
// Cette méthode sera disponible sur le modèle Article
articleSchema.statics.findByAuthorName = async function(nomAuteur) {
  const Auteur = require("./Auteur"); // Import ici pour éviter les boucles
  const auteur = await Auteur.findOne({ nom: nomAuteur });
  if (!auteur) return [];
  return this.find({ auteur: auteur._id }).populate("auteur");
};

module.exports = mongoose.model("Article", articleSchema);
