/**
Exercice 1 : Configuration Sécurisée et Déploiement de dotenv 
Cet exercice se concentre sur les bonnes pratiques de configuration. 
• Objectif : Configurer votre application pour gérer les variables d'environnement 
de manière sécurisée. 
o Installation : Installer les packages dotenv et mongoose. 
o Fichier .env : Créer un fichier .env à la racine de votre projet. Définir la 
variable MONGO_URI (votre chaîne de connexion MongoDB) dans ce 
fichier. 
Exemple : MONGO_URI=mongodb://127.0.0.1:27017/ma_base_avancee 
o Fichier .gitignore : Créer un fichier .gitignore et y ajouter la ligne 
.env pour ne jamais commettre vos secrets sur Git. 
o Connexion dans app.js : Dans votre script principal (app.js), utiliser 
require('dotenv').config() pour charger les variables. Ensuite, 
utilisez process.env.MONGO_URI pour établir la connexion Mongoose. 
o Test : Vérifier que la connexion à la base de données ne fonctionne que si 
la variable est définie dans le .env et que vous affichez l'URI (sans la 
partager bien sûr !) pour confirmation.
 */
const mongoose = require("mongoose");
require("dotenv").config(); // Charge les variables du .env

// Vérification de la variable d'environnement
if (!process.env.MONGO_URI) {
  console.error("❌ La variable MONGO_URI n'est pas définie dans .env");
  process.exit(1); // Arrête le script
}

const uri = process.env.MONGO_URI;
console.log("🔒 URI chargée depuis .env (ne pas partager) :", uri);

async function main() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connecté à MongoDB Atlas !");
  } catch (err) {
    console.error("❌ Erreur de connexion :", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Déconnecté de MongoDB.");
  }
}

main();
