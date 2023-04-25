// 1. Ecouter la soumission du formulaire //

// Approche avec JavaScript - approche plus longue //

/*document.querySelector('contact').addEventListener('submit',function(event){


    event.preventDefault();
})
*/

// Approche avec JQuery - approche simplifée, plus court et simple //


// Initialisation de EmailJS //
emailjs.init('7I3dpCXLqS2TLlzEo');

$('#contact').submit(function(e){

    // 2. Bloquer la redirection de la page //


    e.preventDefault();

    $('.is-invalid').removeClass('is-invalid');
    $('.alert.alert-danger').remove();
    // 3. Récupérer les éléments à vérifier //
   const sujet = $('#sujet');
   const email = $('#email');
   const message =$('#message');
      // Récupération du captcha google. Si vide, alors invalide.
      const grecaptchaRes = grecaptcha.getResponse();

   // 4. Vérification des champs //

   if(sujet.val().length === 0){

    sujet.addClass('is-invalid');
   }

   if(email.val().length === 0 || !isEmailValid(email.val())){

    email.addClass('is-invalid');
   }

   if(message.val().length === 0){

    message.addClass('is-invalid');
   }
// Comment je fais pour savoir s'il y a eu des erreurs ?
    // Je compte le nombre de class 'is-invalid' de ma page.
   if($('.is-invalid').length === 0 && grecaptchaRes.length !== 0){

 // Pas d'erreur, le formulaire est valide.
 const serviceID = 'default_service';
   const templateID = 'template_j57xfsf';

   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
    $(this).replaceWith(` <div class="alert alert-success">
    Merci, votre <u>demande de contact</u>
        a bien été pris en compte.
   </div>`)
   }, (err) => {
       console.log(JSON.stringify(err));
   });


   }
   else{

    // Le formulaire contient des erreurs

    console.log($(this)); // Mon formulaire de contact
        $(this).prepend(`

        <div class="alert alert-danger">
        Attention, nous n'avons pas été en mesure
        de traiter votre demande.<br>
        <u>Vérifiez vos informations.</u>
        </div>`)

   }
});

function isEmailValid(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )};