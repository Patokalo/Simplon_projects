const mongoose = require("mongoose");

// ➤ Chaîne de connexion MongoDB Atlas
const uri = "mongodb+srv://patokalo7_db_user:fzmTISHsQwGBTLjG@cluster0.yiobqth.mongodb.net/test?retryWrites=true&w=majority";

// Définition du schéma Livre
const livreSchema = new mongoose.Schema({
  titre: String,
  auteur: String
});

// Création du modèle
const Livre = mongoose.model("Livre", livreSchema);

// Fonction principale pour la lecture
async function main() {
  try {
    // 1️⃣ Connexion à MongoDB
    await mongoose.connect(uri);
    console.log("✅ Connecté à MongoDB Atlas !");

    // 2️⃣ Récupérer tous les livres
    const tousLesLivres = await Livre.find();
    console.log("📚 Tous les livres :", tousLesLivres);

    // 3️⃣ Récupérer un livre spécifique par titre
    const livreSpecifique = await Livre.findOne({ titre: "Le Petit Prince 2" });
    console.log("📖 Livre spécifique :", livreSpecifique);

    // 4️⃣ Récupérer tous les livres d’un auteur précis
    const livresAuteur = await Livre.find({ auteur: "Antoine de Saint-Exupéry 2" });
    console.log("✏️ Livres de l'auteur :", livresAuteur);

  } catch (err) {
    console.error("❌ Erreur :", err.message);
  } finally {
    // 5️⃣ Déconnexion
    await mongoose.disconnect();
    console.log("🔌 Déconnecté de MongoDB.");
  }
}

// Lancer la fonction principale
main();
