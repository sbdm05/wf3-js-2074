console.log('connecté');

// RECUPERER LES INFORMATIONS ENVOYEES PAR L'UTILISATEUR
// sélectionner et stocker les inputs
const prenom = document.getElementById('prenom');
console.log(prenom);
const nom = document.getElementById('nom');
console.log(nom);
const pwd = document.getElementById('pwd');
console.log(pwd);
const form = document.getElementById('formulaire');
console.log(form);

// au submit sur le form
// récupérer les valeurs des inputs
// VERIFIER

form.addEventListener('submit', function (e) {
  // empêcher la page de se rafraichir
  e.preventDefault();
  // la méthode trim() supprime les espaces devant et après un mot
  const prenomValue = prenom.value.trim();
  const nomValue = nom.value.trim();
  const pwdValue = pwd.value.trim();

  //console.log(prenomValue.length);

  // conditions de validations de formulaire
  // vérifier les échecs en prioriété
  // si (prenomValue est plus petit que 2 ou plus grand que 10,) alors, on affiche erreur
  // dans la console
  // si nomValue est plus petit que 2 ou plus grand que 10, alors, on affiche erreur
  // dans la console
  // si pwdValue est plus petit que 2 ou plus grand que 10, alors, on affiche erreur
  // dans la console
  // sinon, on enregistre les valeurs dans un nouvel objet

     if (prenomValue.length < 2 || prenomValue.length > 10) {
       console.log('votre prenom doit être compris entre 2 et 10 caractères');
       // afficher ce texte dans une balise dans la balse
        // erreur.innerText = 'votre prenom doit être compris entre 2 et 10 caractères';
     } else if (nomValue.length < 3 || nomValue.length > 20) {
       console.log('votre nom doit être compris entre 3 et 20 caractères');
     } else if (pwdValue.length < 8 || pwdValue.length > 15) {
       console.log('pwd à revoir');
     } else {
       console.log('tout va bien');
       // envoi de ces informations au serveur
       const user = {
         prenom: prenom.value,
         nom: nom.value,
         password: pwd.value,
       };
       console.log(user);
       // envoyer au serveur l'objet user
       // reset form
       form.reset();
     }


});
