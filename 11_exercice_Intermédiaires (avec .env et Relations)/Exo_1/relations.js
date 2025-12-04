/**
Exercice 2 : Relations entre Modèles (One-to-Many) 
C'est l'un des aspects les plus cruciaux de la modélisation de données NoSQL : la 
création de relations. 
• Objectif : Modéliser une relation "Un Auteur peut écrire Plusieurs Articles". 
o Schéma Auteur : Créer un Schéma Mongoose pour Auteur avec les 
champs nom (String, requis) et email (String, unique). 
o Schéma Article : Créer un Schéma Mongoose pour Article avec les 
champs titre (String, requis) et contenu (String). 
o Créer la Relation : Dans le Schéma Article, ajouter un champ auteur 
dont le type est un mongoose.Schema.Types.ObjectId et qui référence 
le modèle Auteur (utilisez l'option ref: 'Auteur'). 
o Opération d'Insertion : 
▪ Créer et sauvegarder un nouvel Auteur. 
▪ Créer un nouvel Article en assignant l'ID de l'Auteur 
nouvellement créé au champ auteur de l'article. 
o Opération de Population : Utiliser la méthode .populate('auteur') 
lors de la récupération d'un Article 
(Article.findOne().populate('auteur')) pour récupérer non 
seulement l'article, mais aussi toutes les informations de l'auteur 
associé. Afficher le résultat.
 */

const mongoose = require("mongoose");
require("dotenv").config();

const Auteur = require("./models/Auteur");
const Article = require("./models/Article");

const uri = process.env.MONGO_URI;

async function main() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connecté à MongoDB !");

    // 1️⃣ Création d'un auteur
    const auteur = new Auteur({
      nom: "Aboubacar Kalo",
      email: "aboubacar@example.com"
    });
    const auteurSauve = await auteur.save();
    console.log("👤 Auteur créé :", auteurSauve);

    // 2️⃣ Création d'un article lié à cet auteur
    const article = new Article({
      titre: "Mon Premier Article",
      contenu: "Voici le contenu de mon article...",
      auteur: auteurSauve._id // On assigne l'ID de l'auteur
    });

    const articleSauve = await article.save();
    console.log("📝 Article créé :", articleSauve);

    // 3️⃣ Récupération de l'article avec population de l'auteur
    const articleAvecAuteur = await Article.findOne({ _id: articleSauve._id }).populate("auteur");
    console.log("📖 Article avec auteur :", articleAvecAuteur);

  } catch (err) {
    console.error("❌ Erreur :", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Déconnecté de MongoDB.");
  }
}

main();
