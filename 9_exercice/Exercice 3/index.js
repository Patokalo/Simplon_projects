/*
 Exercice 3 : Implémentation d'un Middleware de Journalisation (Logger) 
Cet exercice introduit le concept crucial des middlewares globaux. 
• Objectif : Créer un middleware personnalisé qui s'exécute avant le gestionnaire 
de route de chaque requête. 
• Action du Middleware : Pour chaque requête reçue, le middleware doit : 
o Afficher dans la console (journaliser) : 
▪ L'heure et la date de la requête. 
▪ La méthode HTTP utilisée (GET, POST, etc.). 
▪ L'URL de la requête. 
o Appeler next() pour passer le contrôle au gestionnaire de route suivant. 
• Compétences clés : Création et utilisation de middlewares, compréhension du 
cycle de vie des requêtes Express, utilisation de l'objet Date. 
*/

const express = require("express");
const app = express();
const PORT = 3000;

// ===============================
// 📌 MIDDLEWARE GLOBAL DE LOGGER
// ===============================
app.use((req, res, next) => {
  const date = new Date().toLocaleString(); // format lisible
  const method = req.method; // GET, POST, PUT, DELETE, ...
  const url = req.url; // /users, /api/taches, etc.

  console.log(`[${date}] ${method} - ${url}`);

  next(); // très important ! Passe au prochain middleware ou route
});

// Pour tester : quelques routes simples
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'accueil !");
});

app.get("/test", (req, res) => {
  res.send("Route de test !");
});

// ===============================
// 🚀 Démarrage du serveur
// ===============================
app.listen(PORT, () => {
  console.log(`Serveur en marche sur http://localhost:${PORT}`);
});
