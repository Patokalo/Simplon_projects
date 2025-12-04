/*
  Exercice 2 : Gestion d'une Liste de Tâches (To-Do List) avec Requêtes et 
État Global Simulé 
Cet exercice combine plusieurs types de requêtes et nécessite de maintenir un état 
côté serveur. 
• Objectif : Implémenter un ensemble de routes pour gérer une liste d'objets 
"tâche" stockés dans un tableau en mémoire (état global simulé). 
• Requêtes à implémenter : 
o GET /api/taches : Récupérer toutes les tâches. 
o POST /api/taches : Ajouter une nouvelle tâche (avec un titre et un 
statut complétée: false). Assurez-vous d'attribuer un ID unique à 
chaque nouvelle tâche. 
o PATCH /api/taches/:id/completer : Mettre le statut d'une tâche 
spécifique à complétée: true. 
o DELETE /api/taches/:id : Supprimer la tâche correspondante. 
• Compétences clés : Gestion d'état en mémoire, génération d'ID uniques, 
utilisation de différents verbes HTTP (GET, POST, PATCH, DELETE).
*/

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// État global simulé : tableau de tâches
let taches = [
    { id: 1, titre: "Faire les courses", complete: false },
    { id: 2, titre: "Lire un livre", complete: false }
];

/* ===========================
   GET /api/taches → récupérer toutes les tâches
=========================== */
app.get('/api/taches', (req, res) => {
    res.json(taches);
});

/* ===========================
   POST /api/taches → ajouter une nouvelle tâche
   Corps attendu : { "titre": "Nouvelle tâche" }
=========================== */
app.post('/api/taches', (req, res) => {
    const { titre } = req.body;

    if (!titre) {
        return res.status(400).json({ message: "Le titre est requis" });
    }

    // Générer un ID unique automatiquement
    const newId = taches.length > 0 ? taches[taches.length - 1].id + 1 : 1;
    const nouvelleTache = { id: newId, titre, complete: false };

    taches.push(nouvelleTache);

    res.status(201).json({
        message: "Tâche ajoutée avec succès",
        tache: nouvelleTache
    });
});

/* ===========================
   PATCH /api/taches/:id/completer → marquer une tâche comme complétée
=========================== */
app.patch('/api/taches/:id/completer', (req, res) => {
    const id = parseInt(req.params.id);
    const index = taches.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Tâche non trouvée" });
    }

    taches[index].complete = true;

    res.json({
        message: "Tâche complétée avec succès",
        tache: taches[index]
    });
});

/* ===========================
   DELETE /api/taches/:id → supprimer une tâche
=========================== */
app.delete('/api/taches/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = taches.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Tâche non trouvée" });
    }

    const tacheSupprimee = taches.splice(index, 1)[0];

    res.json({
        message: "Tâche supprimée avec succès",
        tache: tacheSupprimee
    });
});




/* ===========================
   Démarrage du serveur
=========================== */
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

