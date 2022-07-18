// Variables et constantes
let eleves = [];
const nameInput = document.querySelector('input');
const elevesElts = document.querySelectorAll('.eleves');
const elevesList = document.querySelector('#liste');
const elevesRemovers = document.querySelectorAll('.enlever-eleve');

// EventListener
nameInput.addEventListener('keyup', checkKey);
elevesRemovers.forEach(element => {
    element.addEventListener('click', removeEleve);
});
// Fonctions
function checkKey (event) {
    switch(event.code) {
        case 'Enter':
        case 'NumpadEnter':
            addEleve();
        break;
    }
}

function removeEleve (event) {
    // On récupère la div qui contiernt l'élève et son parent.
    let divEleve = event.target.parentElement;
    let parentDivEleve = event.target.parentElement.parentElement;

    // On récupère le nom de l'élève
    let nomEleve = divEleve.childNodes[0].innerHTML;

    // On retire l'élève du tableau contenant la liste
    let removeIndex = eleves.findIndex(eleve => eleve === nomEleve);
    eleves = eleves.slice(0, removeIndex).concat(eleves.slice(removeIndex + 1, eleves.length))

    // On supprime la div qui contient l'élève a supprimer
    parentDivEleve.removeChild(divEleve);
}

function addEleve ()
{
    if (nameInput.value) {
        // On ajoute l'élève a notre liste d'élèves.
        eleves.push(nameInput.value);

        // On crée la div avec la classe eleve correspondante.
        let eleveDiv = document.createElement('div');
        eleveDiv.className = 'eleve';

        // On crée la div avec le nom de l'élève
        let eleveName = document.createElement('div');
        eleveName.className = 'nom-eleve';
        eleveName.innerHTML = nameInput.value;
        eleveDiv.appendChild(eleveName); // On l'ajoute a notre div eleve

        // On crée la div pour supprimer l'élève
        let eleveRemove = document.createElement('button');
        eleveRemove.className = 'bouton enlever-eleve';
        eleveRemove.innerHTML = 'X';
        eleveRemove.addEventListener('click', removeEleve);
        eleveDiv.appendChild(eleveRemove); // On l'ajoute a notre div eleve

        // On ajoute notre div eleve dans la liste des eleves
        elevesList.appendChild(eleveDiv);

        // On  réinitialise le champ de saisie du nom.
        nameInput.value = null;
    }
}

// Main