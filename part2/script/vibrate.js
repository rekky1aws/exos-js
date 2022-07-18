let canVibrate = true;

document.querySelector('.vibrate').addEventListener('click', startVibrate);

async function startVibrate ()
{
	console.log('startVibrate lancée');
	if (canVibrate) {
		canVibrate = false;
		await navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]);
		canVibrate = true;
	} else {
		console.log('Déjà en train de vibrer');
	}
}