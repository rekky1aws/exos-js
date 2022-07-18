let inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach((inputElement) => {
    inputElement.addEventListener('keyup', addition);
});

function addition () {
    let valueA = parseFloat(inputs[0].value);
    let valueB = parseFloat(inputs[1].value);
    if (!valueA) {
        valueA = 0;
    }
    if (!valueB) {
        valueB = 0;
    }
    document.querySelector('#resultat').innerHTML = valueA + valueB;
}