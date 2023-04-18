console.log('connecté');

// changer depuis JS le contenu de la balise H1
// 1- sélectionner et stocker
const title = document.getElementById('title');
console.log(title); // null
// DOM ???? Document Object Model
title.innerText = 'Nouveau texte';

// ajouter un carré de couleur rouge
// au clic sur ce carré, le carré change de couleur
const carre = document.getElementById('carre-red');
console.log(carre);

carre.addEventListener('click', function () {
  console.log('cliqué');
  carre.style.backgroundColor = 'purple';
});

// ???  comment vous faites pourséléctionner et modifier des éléments de la page
