function presentation(){


    var prenom = prompt('Quel est votre prénom ?',"<votre prénom>");
    var age = parseInt(prompt('Bonjour '+prenom+' quel est votre âge ?','<votre âge>'));
    console.log(age);
    console.log(typeof age);

    var anneeActuelle = (new Date()).getFullYear();
    var dateDeNaissance = anneeActuelle - age;

    document.write("Bonjour"+prenom+", tu es né en "+dateDeNaissance+" !");
}


presentation();