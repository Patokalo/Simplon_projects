// 🌍 1️⃣ Variable globale
let motDePasse = "password";

// 🅰️ 2A. Fonction : Vérifier longueur
function verifierLongueur(mdp) {
  const LONGUEUR_MIN = 8; // variable locale
  if (mdp.length >= LONGUEUR_MIN) {
    return true;
  } else {
    console.log("Erreur : Le mot de passe est trop court.");
    return false;
  }
}

// 🅱️ 2B. Fonction : Vérifier s'il contient au moins un chiffre
function verifierContientChiffre(mdp) {
  if (/[0-9]/.test(mdp)) {
    return true;
  } else {
    console.log("Erreur : Le mot de passe doit contenir au moins un chiffre.");
    return false;
  }
}

// 🅲️ 2C. Fonction : Vérifier mot interdit
function verifierInterdit(mdp, motInterdit) {
  if (mdp !== motInterdit) {
    return true;
  } else {
    console.log("Erreur : Ce mot de passe est interdit.");
    return false;
  }
}

// ⭐ 3️⃣ Fonction principale : valider le mot de passe
function validerMotDePasse(mdpAChecker) {
  let estLong = verifierLongueur(mdpAChecker);
  let aUnChiffre = verifierContientChiffre(mdpAChecker);
  let nEstPasInterdit = verifierInterdit(mdpAChecker, "password");

  // Combinaison avec opérateur logique ET (&&)
  if (estLong && aUnChiffre && nEstPasInterdit) {
    console.log("Succès : Mot de passe validé.");
  } else {
    console.log("Échec : Veuillez corriger les erreurs.");
  }
}

// 🚀 4️⃣ Exécution
validerMotDePasse(motDePasse);
