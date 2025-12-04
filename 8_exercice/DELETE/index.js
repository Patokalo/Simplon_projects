/**
4. Requête DELETE pour supprimer une ressource 
Implémente une route qui gère une requête DELETE pour supprimer une ressource 
identifiée par un paramètre de route.
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
    { id: 2, nom: 'Bob', email: 'bob@example.com' }
];

// Route DELETE pour supprimer un utilisateur
app.delete('/utilisateur/:id', (req, res) => {
    const id = parseInt(req.params.id); // Récupérer l'ID depuis l'URL

    // Trouver l'index de l'utilisateur
    const index = utilisateurs.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Supprimer l'utilisateur du tableau
    const utilisateurSupprime = utilisateurs.splice(index, 1)[0];

    res.json({
        message: 'Utilisateur supprimé avec succès',
        utilisateur: utilisateurSupprime
    });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
