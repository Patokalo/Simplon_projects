// index.js

/*
EXERCICE
1. Requête GET avec paramètres de route 
Implémente une route qui accepte un paramètre dynamique (par exemple un ID 
d'utilisateur) dans l’URL et renvoie un message contenant ce paramètre. 
*/

// Import d'Express
const express = require("express");

// Création de l'application
const app = express();

// Route GET avec paramètre dynamique : /user/:id

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Requête reçue pour l'utilisateur d'ID : ${userId}`);
});

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur démarré sur http://localhost:3000");
});
