const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();
app.use(bodyParser.json()); // pour parser les requêtes JSON

// --- Connexion à MongoDB ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connecté à MongoDB"))
  .catch(err => console.error("❌ Erreur MongoDB :", err.message));

// --- Routes ---
app.use("/api/auth", authRoutes);

// --- Lancer le serveur ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
