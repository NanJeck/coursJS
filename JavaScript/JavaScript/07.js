function profil()
{let prenom = prompt("Saisir ton Prénom?");
//        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
let age = prompt("Bonjour "+prenom+", Quel age as-tu ?");
//- Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].

const today = new Date();
const year = today.getFullYear();
let annee = year - age;
alert('Tu est donc né en '+annee);
// Bonjour [PRENOM], tu as [AGE] !
document.write('Bonjour '+prenom+', tu as '+age+' ans');
}

profil();