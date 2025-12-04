/**
Exercice 3 : Méthodes Statiques et d'Instance 
Les méthodes Mongoose sont essentielles pour encapsuler la logique métier 
directement dans les modèles. 
• Objectif : Ajouter des fonctionnalités avancées au modèle Article de 
l'Exercice 2. 
o Méthode d'Instance : Dans le Schéma Article, ajouter une méthode 
d'instance appelée resume() qui retourne une chaîne de caractères 
contenant le titre de l'article et les 50 premiers caractères du contenu. 
Rappel : Les méthodes d'instance sont définies avec 
articleSchema.methods.resume = function() { ... } et utilisent this pour 
accéder aux données du document. 
o Méthode Statique : Dans le Schéma Article, ajouter une méthode 
statique appelée findByAuthorName(nomAuteur) qui utilise 
l'agrégation ($lookup) ou une double requête pour trouver tous les 
articles écrits par un auteur spécifique, recherché par son nom. 
Rappel : Les méthodes statiques sont définies avec 
articleSchema.statics.findByAuthorName = function(nomAuteur) { ... } 
et opèrent sur le Modèle (this). 
o Test : 
▪ Récupérer un document Article et appeler sa méthode 
.resume(). 
▪ Appeler la méthode statique Article.findByAuthorName('Nom 
de l'auteur'). Afficher les deux résultats.
 */
const mongoose = require("mongoose");
require("dotenv").config();

const Article = require("./models/Article");
const Auteur = require("./models/Auteur");

const uri = process.env.MONGO_URI;

async function main() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connecté à MongoDB !");

    // --- Créer un auteur et un article pour tester ---
    const auteur = new Auteur({ nom: "Aboubacar Kalo", email: "aboubacar2@example.com" });
    await auteur.save();

    const article = new Article({
      titre: "Mon Deuxième Article",
      contenu: "Voici le contenu de mon deuxième article. Il est un peu plus long pour tester resume().",
      auteur: auteur._id
    });
    await article.save();

    // --- Méthode d'instance ---
    const articleRecup = await Article.findOne({ _id: article._id });
    console.log("📝 Résumé de l'article :", articleRecup.resume());

    // --- Méthode statique ---
    const articlesAuteur = await Article.findByAuthorName("Aboubacar Kalo");
    console.log("📚 Articles de l'auteur :", articlesAuteur);

  } catch (err) {
    console.error("❌ Erreur :", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Déconnecté de MongoDB.");
  }
}

main();
