console.log('connecté');

// 1 - sélectionner et stocker les éléments
// btn + carre
const btn = document.getElementById('btn');
console.log(btn);
const carre = document.querySelector('.carre');
console.log(carre);

// pseudo code
// au clic sur btn,
// le carre change de couleur
// le texte de btn change

btn.addEventListener('click', function () {
  // console.log('cliqué');
  carre.classList.toggle('blue');

  // créer une condition en fonction du contenu texte du bouton
  // si texte est 'BLEU', alors le texte affiche 'ROUGE'
  // sinon le texte affiche 'BLEU'
  // let texte = btn.innerText;

  if (btn.innerText === 'BLEU') {
    btn.innerText = 'ROUGE';
  } else {
    btn.innerText = 'BLEU';
  }
});
