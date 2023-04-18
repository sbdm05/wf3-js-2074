console.log('connecté');

/**
 * étapes:
 * sélectionner et stocker les éléments
 * bouton
 * icone
 *
 * au clic sur le bouton,
 * le style du bouton change (backgroundColor + color)
 * en alternance
 *
 * le texte change en alternance
 *
 * au clic sur l'icone
 * le style de l'icone change en alternance
 * le style à utiliser est  fa-smile-wink
 *
 */

const btn = document.querySelector('.btn');
console.log(btn);
const icone = document.querySelector('.far.fa-meh-blank');
console.log(icone);

btn.addEventListener('click', function () {
  console.log('cliqué');
  btn.classList.toggle('abonne');

  // conditions
  if (btn.innerText == 'Abonnez-vous') {
    btn.innerText = 'Abonné';
  } else {
    btn.innerText = 'Abonnez-vous';
  }
});

icone.addEventListener('click', function () {
  console.log('cliqué sur icone');
  icone.classList.toggle('fa-smile-wink');
  icone.classList.toggle('happy');
});
