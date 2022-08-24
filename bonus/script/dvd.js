const possibleColors = ['red', 'blue', 'cyan', 'lime', 'yellow', 'orange', 'indigo', 'purple', 'magenta', 'lightblue', 'maroon', 'lightgrey', 'lightsalmon', 'cornsilk', 'salmon', 'coral', 'lightcoral', 'pink'];
const canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext('2d');
const ballR = 40;
const moveCoeff = 0.4;

let ballC;
changeColor();
let ballX = ballR + Math.floor(Math.random() * (canvas.width - ballR - ballR));
let ballY = ballR + Math.floor(Math.random() * (canvas.height - ballR - ballR));
let direction = Math.floor(Math.random() * 4);
/*
 0 : haut gauche
 1 : haut droite
 2 : bas gauche
 3 : bas droite
 */

function moveBall () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let moveX, moveY;

	//Balle
	ctx.beginPath();
	ctx.arc(ballX, ballY, ballR, 0, 2 * Math.PI, false);
	ctx.fillStyle = ballC;
	ctx.fill();

	switch (direction) {
		case 0:
			moveX = -1 * moveCoeff;
			moveY = -1 * moveCoeff;
		break;

		case 1:
			moveX = 1 * moveCoeff;
			moveY = -1 * moveCoeff;
		break;

		case 2:
			moveX = -1 * moveCoeff;
			moveY = 1 * moveCoeff;
		break;

		case 3:
			moveX = 1 * moveCoeff;
			moveY = 1 * moveCoeff;
		break;
	}

	ballX += moveX;
	ballY += moveY;

	if (ballX <= 0 + ballR) {
		direction += 1;
		changeColor();
	}
	if (ballX >= canvas.width - ballR) {
		direction -= 1;
		changeColor();
	}
	if (ballY <= 0 + ballR || ballY >= canvas.height - ballR) {
		direction = (direction + 2) % 4;
		changeColor();
	}
}

function changeColor () 
{
	ballC = possibleColors[Math.floor(Math.random() * possibleColors.length)];
}

setInterval(moveBall, 1);
