const main = document.querySelector('main');

async function fetchStudents ()
{
	const response = await fetch('https://pachyderme.net/students.json').then(response => response.json());
	const students = response.students;
	console.log(students);

	students.forEach( student => {
		let card = document.createElement('div');
		card.className = "card";

		let cardLastname = document.createElement('div');
		cardLastname.className = "card-lastname";
		cardLastname.textContent = student.lastname;
		card.appendChild(cardLastname);

		let cardFirstname = document.createElement('div');
		cardFirstname.className = "card-firstname";
		cardFirstname.textContent = student.firstname;
		card.appendChild(cardFirstname);

		let cardSex = document.createElement('img');
		cardSex.className = "card-sex";
		if (student.sex  === "M") {
			cardSex.src = "medias/images/male.png";
		} else if (student.sex === "F") {
			cardSex.src = "medias/images/female.png";
		}
		card.appendChild(cardSex);

		main.appendChild(card);
	});
}

fetchStudents();