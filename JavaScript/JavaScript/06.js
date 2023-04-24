//-------------- Les Fonctions --------------\\



function bonjour(){

    //----- Instruction js --

    alert('Bonjour!');

};

function ditBonjour(prenom,nom){


document.write(
    'Bonjour <strong>'+prenom+' '+nom+' '+'</strong>! <br>');
    

};

ditBonjour('Mathieu', 'CHOVINO');
ditBonjour('Christelle','CHOVINO');

function addition(x,y){
z = x +y;
return z;






}

function calculTTC(prixHT, ttva= 20){

    TTC = prixHT + (prixHT *(ttva / 100));
   
    return TTC;
}


function conversionEurToUs(montant,tauxDeChange = 1.0981){

 const MontantConverti = montant*tauxDeChange;
return MontantConverti;

}




console.log(addition(12,56));

console.log(calculTTC(50));



montantEur = 30;
console.log(
    
    montantEur + '€'+' en dollars est égale à: '+
    conversionEurToUs(montantEur)+'$');



