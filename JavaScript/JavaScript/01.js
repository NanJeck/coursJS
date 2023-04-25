 alert("Bonjour je suis le fichier externe")
 
 
 
 // --1 : Déclarer une variable en JS.
 
 var prenom;
 
 // --2 : Affecter une valeur à la variable prenom.
 
 prenom = 'Mathieu';

 // --3 : Afficher la valeur dans la console du navigateur

 console.log(prenom);

 // console.log(Prenom); : caught ReferenceError: Prenom is not defined car JavaScript est sensible à la casse.

 //------ LES TYPES DE VARIABLES --------\\

 console.log(typeof prenom); // -> STRING

 var age = 35;
 
 console.log(typeof age); // NUMBER

 var decimale = -2.345;

 console.log(typeof decimale); // NUMBER

 var boolean = true;

 console.log(typeof boolean); // NUMBER 


 //-------- LES CONSTANTES ----------\\

 /* La déclaration CONST me permet de créer une constante accessible UNIQUEMENT en LECTURE. 
 Sa valeur ne pourra pas être modifiée par des réaffectations ultérieures. */

 const HOST = "localhost";
 const DBNAME = "greta";
 const USERNAME = "root";
 const PASSWORD = "mysql";

// HOST ="10.2.45.185";
// Uncaught TypeError : Assignment to constant variable. Indique que l'on a tenté de changer une valeur d'une constante et que ce n'est pas autorisé.