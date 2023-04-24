/* Le DOM : Inteface de développment en JS pour HTML.

Grâce a DOM, je vais pouvoir accéder / modifier mon HTML.

L'Objet "document" : c'est le point / la porte d'entrée vers mon contenu HTML.

Chaque page chargé dans mon navigateur dispose de cet objet.

*/


// Comment puis-je récupérer les différentes informations de ma page HTML ? //


 const newsletter = document.getElementById('newsletter');

 console.log(newsletter);

 // connaitre l'id de la balise //

 console.log(newsletter.id);

 // Connaitre les classes //

 console.log(newsletter.className);

 // Sélectionner la balise H1 //

 const h1 = document.getElementsByTagName("h1");
 const titre = h1[0];

 console.log(titre);

// Récuperer le texte de ma balise //

console.log(titre.textContent);

// Modifier le texte de ma balise en JS //

titre.textContent = "Lettre d'information"; // Uniquement du texte //
titre.innerHTML = "<u>Lettre d'information</u>"; // Avec du HTML //


// Ajouter un élément sur ma page HTML //


const h4 = document.createElement('h4');

// J'attribue un id à ma nouvelle balise //

h4.id = 'description';

// Ajouter du texte à ma nouvelle balise //

h4.textContent = "Inscrivez-vous pour recevoir toutes notre actualité !";

// comment afficher cette balise <p> sur notre page ? //

// Je place la balise paragraphe dans la newsletter

// Place l'élément dans la balise newsletter à la fin
 // newsletter.appendChild(h4); 

// Place l'élément dans la balise newsletter au début.
 
// newsletter.prepend(h4);

 titre.parentNode.insertBefore(h4, titre.nextSibling);


 // Les évènements //

 const email = document.querySelector('#email');
 
 console.clear();
 
 console.log(email);

 // Je vais écouter les "CHANGEMENTS"(évènements) qui sont éffectuer par l'utilisateur sur mon champ email. //
 
  // Lorsqu'un changement se produira sur mon champ EMAIL, JavaScript déclenchera la fonction checkEmail pour nous. 

 email.addEventListener('change',checkEmail);

 // Permet d'afficher lorsqu'elle est appelée dans la console la valeur du champs émail //
 
 function checkEmail(){

    console.log(email.value);

    // Récupération du button
   
    const button = document.querySelector('button.btn');
   
    console.log(button);

   // Activation du button
   
   button.disabled = false;
 }


 /* Les différents évènements  
 

 MOUSE(souris)
 
 - click : au click sur un élément;
 - dblClick : au double click sur un élément;
 - mouseEnter : la souris passe au dessus d'un élément;
 - mouseLeave : la souris sort de l'élément;
 - mouseOver : au passage de la souris; 

 Keyboard(clavier)

 -  keydown : une touche est enfoncé;
 -  keyup   : une touche est relachée;
 
 Window(fenêtre)

 - scroll : défilement de la fenêtre;
 - resize : redimentionnement de la fenêtre;


 FORM(formulaire)

 - submit : le formulaire a été soumis par l'utilisateur;
 - change : ce produit pour les balises input, select, textarea, détecte les changements de contenus;
 - input  : capter la saisie d'un utilisateur dans le champs input;
 
 */


 // Je veux écouter la soumission de mon formulaire de newsletter


 newsletter.addEventListener('submit',function(event){


    // Par défault, la soumission du formulaire entraîne le rafraîchissement de la page. //

    // alert('Mon formulaire à été soumis');
    event.preventDefault(); // Permet de bloquer le rechargement de la page
    console.log(event);

    const div = document.createElement('div');
    div.className = 'alert alert-success';
    div.textContent = 'Merci, votre demande d\'inscription a bien été prise en compte.';
    
    // Affichage de l'alerte sur le formulaire

    titre.parentNode.insertBefore(div, titre.nextSibling);

    // Réinitialisation du formulaire

    newsletter.reset();


 });