const mongoose = require("mongoose");
const Livre = require("./models/Livre.js"); // Assure-toi que models/Livre.js existe

// ➤ Chaîne de connexion MongoDB Atlas
const uri = "mongodb+srv://patokalo7_db_user:fzmTISHsQwGBTLjG@cluster0.yiobqth.mongodb.net/test?retryWrites=true&w=majority";

async function main() {
  try {
    // 1️⃣ Connexion
    await mongoose.connect(uri);
    console.log("✅ Connecté à MongoDB Atlas !");

    // --- Option A : updateOne() par critère ---
    const result1 = await Livre.updateOne(
      { titre: "Le Petit Prince 2" }, // filtre
      { $set: { auteur: "Antoine de Saint-Exupéry Modifié." } } // nouveau champ
    );
    console.log("✏️ updateOne résultat :", result1);

    // --- Option B : findByIdAndUpdate() si on connait l'ID ---
    // const id = "6930ab340b6d0c899be81e0d"; // remplace par cet _id
    // const result2 = await Livre.findByIdAndUpdate(
    //   id,
    //   { auteur: "Auteur par ID" },
    //   { new: true } // retourne le document mis à jour
    // );
    // console.log("✏️ findByIdAndUpdate résultat :", result2);

    // 2️⃣ Vérifier la mise à jour en relisant les documents (Exercice 3)
    const livres = await Livre.find();
    console.log("📚 Livres après mise à jour :", livres);

  } catch (err) {
    console.error("❌ Erreur :", err.message);
  } finally {
    // 3️⃣ Déconnexion
    await mongoose.disconnect();
    console.log("🔌 Déconnecté de MongoDB.");
  }
}

// Lancer la fonction principale
main();
