var inputValues = [];
document.querySelector('input').addEventListener('keydown', keyPressed);

function keyPressed (e)
{
    switch(e.code) {
        case 'Enter':
            appendValue();
        break;

        case 'NumpadEnter':
            appendValue();
        break;
    }
}

function appendValue ()
{
    let value = parseFloat(document.querySelector('input').value);
    if (!isNaN(value)) {
        inputValues.push(value);
        affichage();
    }
    document.querySelector('input').value = null;
}

function affichage ()
{
    let valueCumul = 0;
    let iter = 0;
    let valeurs = document.querySelector('#valeurs');
    let cumul = document.querySelector('#cumul');
    let moyenne = document.querySelector('#moyenne');
    valeurs.innerHTML = "Valeurs : ";   
    inputValues.forEach((value) => {
        let valueDisp = document.createElement('span');
        valueDisp.innerHTML = value;
        valueDisp.className = 'nombres-cumul'
        valeurs.appendChild(valueDisp);
        valueCumul += value;
        iter += 1;
    });
    cumul.innerHTML = "Cumul : " + valueCumul;
    moyenne.innerHTML = "Moyenne : " + (valueCumul / iter);
}

