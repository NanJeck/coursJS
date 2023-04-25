//-----------Les conditions-------------\\


/*var majoriteLegaleFr = 18;

if(19 >= majoriteLegaleFr){

    alert('Bienvenue sur mon site');
}

if(14 >= majoriteLegaleFr){

    alert('Bienvenue sur mon site');
}
else if(17 == majoriteLegaleFr){

    alert('C\'est un peu juste, non ?' );
}

else{

    alert('va voir chez Google si...');
}

*/
function verifierAge(){

ageLegale = 18;
    var age = prompt('Quel est votre âge ?');
    if(age > ageLegale){

        alert('Vous êtes majeur, bienvenue sur le site !');
    }
    else{

        alert('Vous n\'est pas majeur, vous allez êtes redirigé vers Google');
        
            document.location.href="https://www.google.com/";
   

}
}
verifierAge();