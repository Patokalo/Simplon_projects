/**
Créer et Se Connecter à une Base de Données Simple 
Cet exercice vise à établir la connexion de base et à définir un schéma simple. 
• Objectif : 
o Configurer un projet Node.js. 
o Installer mongoose. 
o Établir une connexion à une base de données MongoDB (Atlas). 
o Définir un Schéma Mongoose simple pour un objet "Livre" (avec les 
champs titre et auteur en tant que String). 
o Créer un Modèle à partir de ce schéma. 
o Afficher un message de succès ou d'erreur à la connexion.

Opérations de Création (Create) 
Il est temps de sauvegarder des données dans la base de données. 
• Objectif : 
o Reprendre le Modèle Livre de l'Exercice 1. 
o Créer une nouvelle instance du modèle Livre 
o Utiliser la méthode .save() sur cette instance pour l'enregistrer dans 
MongoDB. 
o Utiliser .then() et .catch() (ou async/await) pour gérer le résultat de 
l'opération : afficher un message de succès (avec l'objet créé) ou l'erreur.
*/



const mongoose = require("mongoose");

// ➤ Ta chaîne de connexion MongoDB Atlas
const uri = "mongodb+srv://patokalo7_db_user:fzmTISHsQwGBTLjG@cluster0.yiobqth.mongodb.net/test?retryWrites=true&w=majority";

// Définition du schéma Livre
const livreSchema = new mongoose.Schema({
  titre: String,
  auteur: String
});

// Création du modèle
const Livre = mongoose.model("Livre", livreSchema);

// Fonction principale asynchrone
async function main() {
  try {
    // 1️⃣ Connexion à MongoDB
    await mongoose.connect(uri);
    console.log("✅ Connecté à MongoDB Atlas !");

    // 2️⃣ Création et insertion d’un document
    const livre = new Livre({
      titre: "Le Petit Prince 2",
      auteur: "Antoine de Saint-Exupéry 2"
    });

    const resultat = await livre.save();
    console.log("📘 Livre enregistré :", resultat);

  } catch (err) {
    console.error("❌ Erreur :", err.message);
  } finally {
    // 3️⃣ Déconnexion de la base
    await mongoose.disconnect();
    console.log("🔌 Déconnecté de MongoDB.");
  }
}

// Lancer la fonction principale
main();
