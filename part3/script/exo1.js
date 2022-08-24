const button = document.querySelector('.fetch-button');

button.addEventListener('click', fetchImg);

async function fetchImg () {
	const img = document.querySelector('#wiki-image');
	fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
	    .then(response => response.blob())
	    .then(function (myBlob) {
	        var objectURL = URL.createObjectURL(myBlob);
	        img.src = objectURL;
	    });

}