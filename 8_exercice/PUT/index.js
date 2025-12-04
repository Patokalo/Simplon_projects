/**
 * EXERCICE
3. Requête PUT pour mettre à jour une ressource 
Développe une route qui gère une requête PUT afin de mettre à jour une ressource 
existante, identifiée par un paramètre de route, en utilisant les données envoyées dans 
le corps de la requête.
 */

// Importer express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Exemple de "base de données" en mémoire
let utilisateurs = [
    { id: 1, nom: 'Alice', email: 'alice@example.com' },
    { id: 2, nom: 'Bob', email: 'bob@example.com' },
    { id: 3, nom: 'Kalo', email: 'patokalo7@gmail.com'}
];

// Route PUT pour mettre à jour un utilisateur
app.put('/utilisateur/:id', (req, res) => {
    const id = parseInt(req.params.id); // Récupère l'ID dans l'URL
    const { nom, email } = req.body;    // Récupère les nouvelles données

    // Vérification basique
    if (!nom && !email) {
        return res.status(400).json({ message: 'Nom ou email requis pour la mise à jour' });
    }

    // Trouver l'utilisateur
    const utilisateur = utilisateurs.find(u => u.id === id);

    if (!utilisateur) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Mettre à jour les champs
    if (nom) utilisateur.nom = nom;
    if (email) utilisateur.email = email;

    res.json({
        message: 'Utilisateur mis à jour avec succès\n',
        utilisateur
    });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});


