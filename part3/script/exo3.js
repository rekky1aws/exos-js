const storageDiv = document.querySelector('#storage');
const input = document.querySelector('input');

const addButton = document.querySelector('.add-button');
const remButton = document.querySelector('.rem-button');

addButton.addEventListener('click', saveValue);
remButton.addEventListener('click', deleteValue);


function loadLocalStorage () {
	console.log(localStorage);
	let stored = JSON.parse(localStorage.getItem("promoName"));
	storageDiv.innerHTML = stored;
}

loadLocalStorage();

function saveValue () {
	localStorage.setItem("promoName", JSON.stringify(input.value));
	input.value = null;
	console.log(localStorage);
}

function deleteValue () {
	localStorage.removeItem("promoName");
	console.log(localStorage);
}