const User = require("../models/User");
const bcrypt = require("bcryptjs");

// INSCRIPTION
exports.register = async (req, res) => {
  const { nom, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email déjà utilisé" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ nom, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "Utilisateur créé avec succès", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CONNEXION
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Utilisateur non trouvé" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Mot de passe incorrect" });

    res.json({ message: "Connexion réussie", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
