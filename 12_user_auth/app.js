const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(bodyParser.json());

// --- Connexion à MongoDB ---
connectDB();

// --- Routes ---
app.use("/api/auth", authRoutes);

// --- Lancer le serveur ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
