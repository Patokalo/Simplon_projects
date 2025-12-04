/*
 Exercice 1 : Simulation Base de Données 
Créer un tableau d’objets : 
let users = [ 
{ id: 1, name: "Awa" }, 
{ id: 2, name: "Mamadou" } 
] 
Routes à implémenter : 
• GET /users (liste) 
• GET /users/:id (par ID) 
• POST /users (ajout) 
• PUT /users/:id(modification) 
• DELETE /users/:id (suppression)
*/

const express = require("express");
const app = express();
const PORT = 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// "Base de données" simulée
let users = [
  { id: 1, name: "Awa" },
  { id: 2, name: "Mamadou" },
  { id: 3, name: "Amadou" },
];

/* 
   GET /users → liste de tous les utilisateurs
*/
app.get("/users", (req, res) => {
  res.json(users);
});

/* 
   GET /users/:id → récupérer un utilisateur par ID
 */
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id); //req.params.id : récupère ce qui remplace :id dans l’URL.
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  res.json(user);
});

/* 
   POST /users → ajouter un nouvel utilisateur
   Corps attendu : { "name": "Nom" }
*/
app.post("/users", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Le nom est requis" });
  }

  // Générer un nouvel ID automatiquement
  
  // const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  

  const newUser = { id: users.length + 1, name };

  users.push(newUser);

  res.status(201).json({
    message: "Utilisateur ajouté avec succès",
    user: newUser,
  });
});

/* 
   PUT /users/:id → modifier un utilisateur
   Corps attendu : { "name": "Nouveau nom" }
 */
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id); 
  const { name } = req.body;

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  if (!name) {
    return res
      .status(400)
      .json({ message: "Le nom est requis pour la mise à jour" });
  }

  users[index].name = name;

  res.json({
    message: "Utilisateur mis à jour avec succès",
    user: users[index],
  });
});

/* 
   DELETE /users/:id → supprimer un utilisateur
*/
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  // Supprimer et récupérer l'utilisateur supprimé
  const deletedUser = users.splice(index, 1)[0];

  res.json({
    message: "Utilisateur supprimé avec succès",
    user: deletedUser,
  });
});

/*
   Démarrage du serveur
*/
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
