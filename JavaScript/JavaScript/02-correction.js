var recettes = [

    {

        nom:'Poulet au four',
        nbPersonnes:12,
        difficulte:'Facile',
        specialite:'Français',
        categorie:'plat',
        sousCategorie:'Viande',
        duree:{

            tpsPreparation:40,
            tpsCuisson:60,
            tpsRepos:null,
        },
        cuisson:{
            prechauffe:200,
            temperature:200,
            mode: 'Chaleur tournante'


        },
        ingredients:[
            {
                nom: 'Poulet Entier',
                qte:6,
                unite:'pièce'
            },
            {
                nom:'Poivre',
                qte:10,
                unite:'g',
            },
            {
                nom:'piment',
                qte:4,
                unite:'pièce',
            },
            {
                nom:'sel',
                qte:5,
                unite:'g'
            },
            {
                nom:'jus de citron',
                qte:10,
                unite:'cl',
            },
            



        ],
        ustensiles:[
            '6 plats rectangulaires ou rond',
            '6 fours',
            '1 saladier',
        ],

        instructions:[
{
    description:'Commencer par commander les poulets',

},

{
    description:'Nettoyer le poulet',
}
        ]


    }
];

console.log(recettes[0]);

//--- Ajouter un élément dans un tableau ---\\


console.clear();

var couleurs = ['blue','jaune','vert'];

console.log(couleurs);

couleurs.push('marron'); // Ajouter à la fin du tableau

console.log(couleurs);

couleurs.unshift('violet'); // Ajouter au début d'un tableau

console.log(couleurs);

//--- Sortir un élément d'un tableau---\\

var monDernierElement = couleurs.pop(); // Supprime le dernier élément et le retourne.
var monDernierElement = couleurs.shift(); // Supprime le premier élément et le retourne


console.log(couleurs);