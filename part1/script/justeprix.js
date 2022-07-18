// Variables
let numberToFind;
const input = document.querySelector('#prompt');
const historique = document.querySelector('#historique');
const reloadButtons = document.querySelectorAll('.reloadGame');

// Event Listeners
reloadButtons.forEach(element => {
    element.addEventListener('click', reload);
});
input.addEventListener('keyup', checkCode);

function checkCode (event)
{
    switch(event.code) {
        case 'Enter':
            validatePrompt();
        break;

        case 'NumpadEnter':
            validatePrompt();
        break;

        case 'NumpadAdd':
            reload();
        break;
    }
}

function validatePrompt () {
    const inputValue = parseInt(input.value);
    if(isNaN(inputValue)) {
        console.warn("Entrez un nombre entre 0 et 100");
    } else {
        let histoPart = document.createElement('div');
        
        if (inputValue === numberToFind) {
            histoPart.innerHTML = 'BRAVO !';
            histoPart.className = 'bravo';
        } else {
            histoPart.innerHTML = inputValue;
            if (inputValue > numberToFind) {
                histoPart.className = 'less';
            } else if (inputValue < numberToFind) {
                histoPart.className = 'more';
            }
        }
        historique.appendChild(histoPart);
    }
    input.value = null;
}

function generateNumber()
{
    numberToFind = Math.floor(Math.random() * 100);
    console.log('Le nombre a été changé');
}

function reload () 
{
    historique.innerHTML = null;
    generateNumber();
    alert('Jeu réinitialisé');
}

generateNumber();