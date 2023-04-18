/* 
const tab = document.querySelectorAll('.question')
console.log(tab); // []
[] = crochets
itérer dans le tableau
ajouter un événement au clic à chaque élément du tableau
item.nextElementSibling
ajouter la classe visible 

pour gérer la flèche
item.lastElementChild
classe = fa-chevron-up
*/

const tab = document.querySelectorAll('.question');
console.log(tab);

// item représente chaque élément du tableau

tab.forEach((item) => {
  item.addEventListener('click', function () {
    const next = item.nextElementSibling;
    console.log(next);
    // faire apparaitre la DIV next
    next.classList.toggle('visible'); // display: block

    // pour l'icone
    const icone = item.lastElementChild;
    console.log(icone);
    icone.classList.toggle('fa-chevron-up');
  });
});
