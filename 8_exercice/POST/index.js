/*
EXERCICE
2. Requête POST avec données dans le corps 
Crée une route qui gère une requête POST et extrait les données envoyées dans le 
corps de la requête (ex : nom et email d’un nouvel utilisateur). 
Tu auras besoin du middleware express.json() pour cela.
*/


// Importer le module Express
const express = require('express');

// Créer une instance d'Express
const app = express();

// Définir le port du serveur
const PORT = 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Route POST pour ajouter un nouvel utilisateur
app.post('/utilisateur', (req, res) => {
  // Récupération des données du corps de la requête
  const { nom, email } = req.body;

  // Vérification basique : nom et email sont obligatoires
  if (!nom || !email) {
    return res.status(400).json({ 
      message: 'Nom et email sont requis' 
    });
  }

  // Ici, on pourrait ajouter le nouvel utilisateur dans une base de données
  // Par exemple : database.push({ nom, email });

  // Réponse en cas de succès
  res.status(201).json({ 
    message: 'Utilisateur créé avec succès',
    utilisateur: { nom, email } 
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
