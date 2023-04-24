//----------Déclaration d'un tableau indexé----------------\\

var apprenants = [];
var learners = new Array; // Autre notation, mais identique.

apprenants[0] = 'Mathieu';
apprenants[1] = 'Mohammed';
apprenants[2] = 'Pierre';

console.log(apprenants);
console.log(apprenants[2]);


apprenants = ['Omar','Pierre','Patrick','Chris',{prenom:'Chris'}];
console.log(apprenants);
console.log(apprenants[1]);


//----------Créer un objet en JavaScript-----------\\


var apprenant = {

//  Propriété: Valeur
prenom : 'Mathieu',
nom : 'CHOVINO',
age: 26,

};

console.clear(); // Vider la console

console.log(apprenant);
console.log(apprenant['prenom']);
console.log(apprenant.prenom); // Ecriture à priviligier


//--------- La deuxième dimension -------------\\

var annuaireDesApprenants = [

    {prenom : 'Stéphane', nom:'CHOVINO'},
    {prenom: 'Mohammed', nom:'GIRI'},
    {prenom: 'Pierre', nom:'VALOR'},

    ['BNX','Peugeot','Citroen']

]
console.log(apprenants[4]);
console.log(annuaireDesApprenants[0].prenom);
console.log(annuaireDesApprenants[1].prenom);
console.log(annuaireDesApprenants[2].prenom);
console.log(annuaireDesApprenants[0].nom);
console.log(annuaireDesApprenants[1].nom);
console.log(annuaireDesApprenants[2].nom);
console.log(annuaireDesApprenants[3]);

var contact = [
    {
        prenom: 'John',
        nom: 'DOE',
        coordonnees: {
            adresse: {
                rue: '10 Rue de l\'Avenir',
                cp: 95240,
                ville: 'Cormeilles en Parisis',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'john.doe@gmail.com',
            tel: {
                fixe: '09 50 708 708',
                fax: '09 50 708 709',
                port: '08 45 56 18 09',
            }
        }
    },
    {
        prenom: 'Jane',
        nom: 'DOE',
        coordonnees: {
            adresse: {
                rue: '10 Rue de l\'Avenir',
                cp: 95240,
                ville: 'Cormeilles en Parisis',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'jane.doe@gmail.com',
            tel: {
                fixe: '09 50 708 708',
                fax: '09 50 708 709',
                port: '08 54 65 09 17 78',
            }
        }
    }
];

// Afficher le prénom et le pays de John : 
console.log( contact[0].prenom );
console.log( contact[0].coordonnees.adresse.pays.nom );
console.log('-----------');
console.log( contact[1].prenom );
console.log( contact[1].coordonnees.adresse.pays.nom );   



var recettes = [

       {
        Nom:{
            GuicheLorraine:{
            
                ingredients:[' 4 oeuf','cremeFraiche','lardons','lait','pâte brisée'],
                durée:30,
                personnes:4,
                tâches:['Commencez par melanger les quatres oeuf et le lait jusqu"à obtenir une pâte blanche',
                'Ajoutez la crème fraiche et melangez',
                'Posez votre pâte brisée dans un recipient',
                'Posez votre pâte dans le recipient',
                'Ajoutez les lardons sur votre pâte',
                'Faites le cuire pendant 30min']
    
            }

        }
       }
];
   
console.log(recettes[0].Nom.GuicheLorraine.tâches);

