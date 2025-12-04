const mongoose = require("mongoose");
const Livre = require("./models/Livre");

const uri = "mongodb+srv://patokalo7_db_user:fzmTISHsQwGBTLjG@cluster0.yiobqth.mongodb.net/test?retryWrites=true&w=majority";

async function main() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connecté à MongoDB Atlas !");

    // Supprimer tous les livres dont l'auteur est 'Un Débutant'
    const result = await Livre.deleteMany({ auteur: "Un Débutant" });
    console.log("🗑️ Documents supprimés :", result.deletedCount);

  } catch (err) {
    console.error("❌ Erreur :", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Déconnecté de MongoDB.");
  }
}

main();
