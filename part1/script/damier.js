let inputs = document.querySelectorAll('.range-input');
const checkboard = document.querySelector('#checkboard');

function update ()
{
    // Initialisationd du damier.
    checkboard.innerHTML = "";

    // Mettre le bon nombre de colonnes.
    checkboard.style.gridTemplateColumns = `repeat(${inputs[0].value}, 1fr)`;

    for (let i = 0; i < inputs[0].value; i++) {
        let checkboardCol = document.createElement('div');
        checkboardCol.className = "checkboard-col";
        checkboardCol.style.gridTemplateRows = `repeat(${inputs[1].value}, 1fr)`;

        for (let j = 0; j < inputs[1].value; j++) {
            let checkboardBlock = document.createElement('div');
            checkboardBlock.className = "checkboard-block";
            checkboardCol.appendChild(checkboardBlock);
        }

        checkboard.appendChild(checkboardCol);
    }
}

inputs.forEach( (input) => {
    input.addEventListener('change', update);
});

update();