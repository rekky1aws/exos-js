const studentList = document.querySelector('#student-list');
const alphabetChbx = document.querySelector('#alphabet');

alphabetChbx.addEventListener('change', fetchStudents)

async function fetchStudents ()
{
	const response = await fetch('https://pachyderme.net/students.json').then(response => response.json());
	const students = response.students;

	studentList.innerHTML = null;

	students.forEach( student => {

		//console.log(student["firstname.latin"]);
		let card = document.createElement('a');
		card.href = "https://github.com/" + student.githubid;
		card.className = "card";

		let cardLastname = document.createElement('div');
		cardLastname.className = "card-lastname";

		let cardFirstname = document.createElement('div');
		cardFirstname.className = "card-firstname";

		if (!alphabetChbx.checked && student["firstname.latin"] && student["lastname.latin"]) {
			cardLastname.textContent = student["lastname.latin"];
			cardFirstname.textContent = student["firstname.latin"];
		} else {
			cardLastname.textContent = student.lastname;
			cardFirstname.textContent = student.firstname;
		}

		card.appendChild(cardLastname);
		card.appendChild(cardFirstname);	

		let cardSex = document.createElement('img');
		cardSex.className = "card-sex";
		if (student.sex  === "M") {
			cardSex.src = "medias/images/male.png";
		} else if (student.sex === "F") {
			cardSex.src = "medias/images/female.png";
		}
		card.appendChild(cardSex);

		studentList.appendChild(card);
	});
}

fetchStudents();