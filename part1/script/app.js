/*
EXO 1 : Afficher Hello World dans la console.

EXO 2 : Afficher Hello World sur la page.

EXO 3 : Afficher Hello World dans une balise h1

EXO 4 : Afficher Hello World dans la balise dont l'id est 'greetings'

EXO 5 : Afficher tous les students dans la console.

EXO 6 : Afficher tous les students dans une liste non triée (ul), chaque student dans être dans un element de liste (li)

EXO 7 : Charger le style associé a la classe 'dynamicStyle' lorsque que l'on clique sur la balise main.
*/

// EXO 1
console.log('Hello World');

    // EXO 2
document.body.innerHTML += "Hello World !";

    // EXO 3
var helloWordH1 = document.createElement("h1");
helloWordH1.textContent = "Hello World";
document.body.appendChild(helloWordH1);

    // EXO 4
document.querySelector('#greetings').innerHTML = "Hello World dans la div #greetings";

    // EXO 5
var students = ["Alexandre B","Alexandre C","Amandine","Benoit","Donatien","Julian", "Hugo", "Loic","Maxence","Myriam","Nicolas","Quentin F","Quentin R","Steven","Thomas","Tristan","Vlad","Youcef"];
students.forEach((student) => {
    console.log(student);
});

    // EXO 6
let studentsList = document.querySelector('#studentsList');
students.forEach((student) => {
    let studentLi = document.createElement('li');
    studentLi.textContent = student;
    studentsList.appendChild(studentLi);
});

    // EXO 7
function loadStyle (event)
{
    event.target.className = "dynamicStyle";
}

document.querySelector("main").addEventListener("click", loadStyle);

    // ADDITION
