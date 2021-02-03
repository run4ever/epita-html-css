
// inutile qd on importe le je en bas de la page HTML
// window.addEventListener("DOMContentLoaded", (event) => {

//sélections
let itemsLi = document.querySelectorAll('ul#photo-list li');
nbElt = document.querySelector('#nb-photos');
let index = -1;

//fonctions appelées
function clickImage() {
    this.classList.toggle('selected');
    nbElt.textContent = document.querySelectorAll('li.selected').length;
    document.querySelector('li.hover').classList.toggle('hover');
    index = parseInt(this.dataset.index);
    console.log(index);
}

function onKeydownDocument(ev) {
    ev.preventDefault();
    console.log(ev.key);
    switch (ev.key) {
        case 'ArrowRight':
            console.log('index_entree',index);
            //document.body.style.overflow = 'hidden';
            if(index>=0){
                itemsLi[index].classList.toggle('hover');
            }
            if(index==9){
                index=-1;
            }
            //index++;
            itemsLi[++index].classList.toggle('hover');
            console.log('index_sortie',index);
            break;

        case 'ArrowLeft':
           // document.body.style.overflow = 'hidden';
            if(index>=0){
                itemsLi[index].classList.toggle('hover');
            }
            if(index<=0){
                index=10;
            }
            //index--;
            itemsLi[--index].classList.toggle('hover');

            break;

        case 'Enter':            
            itemsLi[index].classList.toggle('selected');
            nbElt.textContent = document.querySelectorAll('li.selected').length;

            break;
    
    
    }

}

//écouteurs d'évènements
for (let item of itemsLi) {
    item.addEventListener('click', clickImage);
 }

document.addEventListener('keydown', onKeydownDocument);

//});
 