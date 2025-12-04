// -------------------- CLASSE PERSONNAGE --------------------
class Personnage {
    constructor(nom, classe, sante, attaque) {
        this.nom = nom;             // Nom du personnage
        this.classe = classe;       // Classe (Guerrier, Mage, etc.)
        this.sante = sante;         // Santé actuelle
        this.attaque = attaque;     // Puissance d'attaque
    }

    // Méthode pour attaquer un autre personnage
    attaquer(cible) {
        cible.subirDegats(this.attaque);
    }

    // Méthode pour subir des dégâts
    subirDegats(points) {
        this.sante -= points;
        if(this.sante < 0) this.sante = 0; // La santé ne peut pas être négative
    }

    // Méthode pour se soigner
    soigner(points) {
        this.sante += points;
        if(this.sante > 100) this.sante = 100; // La santé max est 100
    }

    // Méthode pour retourner les infos du personnage
    afficherInfos() {
        return `Nom: ${this.nom}, Classe: ${this.classe}, Santé: ${this.sante}, Attaque: ${this.attaque}`;
    }
}

// -------------------- GESTION DU DOM --------------------

// Sélection des éléments HTML
const form = document.getElementById('form-personnage');
const conteneur = document.getElementById('conteneur-personnages');

// Liste pour stocker les personnages
const personnages = [];

// Fonction pour générer une carte HTML pour un personnage
function genererCarte(personnage) {
    // Création des éléments
    const carte = document.createElement('div');
    carte.classList.add('carte-personnage');

    // Ajouter classe si santé faible
    if(personnage.sante <= 20) {
        carte.classList.add('faible-sante');
    }

    const titre = document.createElement('h3');
    titre.textContent = personnage.nom + ' (' + personnage.classe + ')';

    const santePara = document.createElement('p');
    santePara.textContent = `Santé: ${personnage.sante}`;

    const attaquePara = document.createElement('p');
    attaquePara.textContent = `Attaque: ${personnage.attaque}`;

    // Bouton attaquer (exemple: attaque sur soi-même pour test)
    const btnAttaquer = document.createElement('button');
    btnAttaquer.textContent = 'Attaquer';
    btnAttaquer.classList.add('attaquer');

    // Bouton soigner
    const btnSoigner = document.createElement('button');
    btnSoigner.textContent = 'Soigner';
    btnSoigner.classList.add('soigner');

    // Événement pour attaquer
    btnAttaquer.addEventListener('click', () => {
        // Pour le test, le personnage s'auto-attaque
        personnage.attaquer(personnage);
        santePara.textContent = `Santé: ${personnage.sante}`;
        // Mise à jour de la couleur si faible santé
        if(personnage.sante <= 20) {
            carte.classList.add('faible-sante');
        }
    });

    // Événement pour soigner
    btnSoigner.addEventListener('click', () => {
        personnage.soigner(10); // Soigne de 10 points
        santePara.textContent = `Santé: ${personnage.sante}`;
        // Retirer la classe si santé redevenue normale
        if(personnage.sante > 20) {
            carte.classList.remove('faible-sante');
        }
    });

    // Ajout des éléments à la carte
    carte.appendChild(titre);
    carte.appendChild(santePara);
    carte.appendChild(attaquePara);
    carte.appendChild(btnAttaquer);
    carte.appendChild(btnSoigner);

    // Ajout de la carte au conteneur
    conteneur.appendChild(carte);
}

// Événement sur le formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs
    const nom = document.getElementById('nom').value;
    const classe = document.getElementById('classe').value;
    const sante = parseInt(document.getElementById('sante').value);
    const attaque = parseInt(document.getElementById('attaque').value);

    // Création d'une instance
    const perso = new Personnage(nom, classe, sante, attaque);
    personnages.push(perso);

    // Génération de la carte
    genererCarte(perso);

    // Réinitialisation du formulaire
    form.reset();
});
