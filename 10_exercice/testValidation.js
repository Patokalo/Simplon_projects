const mongoose = require("mongoose");
const Livre = require("./models/Livre");

const uri = "mongodb+srv://patokalo7_db_user:fzmTISHsQwGBTLjG@cluster0.yiobqth.mongodb.net/test?retryWrites=true&w=majority";

async function main() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connecté à MongoDB Atlas !");

    // Tenter de créer un livre sans pages
    const livre = new Livre({
      titre: "Livre Sans Pages",
      auteur: "Un Débutant"
      // pages manquant volontairement
    });

    await livre.save(); // Cela doit lancer une erreur
  } catch (err) {
    console.error("❌ Erreur de validation :", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Déconnecté de MongoDB.");
  }
}

main();
