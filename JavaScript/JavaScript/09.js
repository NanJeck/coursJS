for (let i=0; i<=10 ; i++){
    document.write('<p>Instruction executive : ' + i + '</p>');
}

/*

En considerant le tableau suivants, affichez sur votre page ou dans la console, 
la liste des prénoms.

*/

const prenoms = ['Jean','Hugo','Maxime','Pierre','Papier','Ciseau'];

for (let i=0; i<prenoms.length ; i++){
    document.write(prenoms[i]+'<br>');
}

//calcul somme d'un tableau d'entier

const tableau = [1,2,3,4,5,6,7,8,9];
var somme=0;
for (let i=0; i<tableau.length ; i++){
    somme=somme+tableau[i];
}
console.log("La somme du tableau : "+somme);