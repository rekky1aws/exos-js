// Constantes
const heures = document.querySelector('#heures');
const minutes = document.querySelector('#minutes');
const secondes = document.querySelector('#secondes');

// Fonctions
function dessinerAiguille (canvas, lineAngle, lineLength, color = 'lime', width = 5)
{
    const ctx = canvas.getContext('2d');

    // Apparence du tracé;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';

    // Nettoyage du canvas
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Déplacement de la position initiale au centre du canvas.
    ctx.moveTo(canvas.width/2, canvas.height/2);

    // 1 radian = 57.29578 deg
    ctx.lineTo(canvas.width/2 + Math.cos((lineAngle - 90)/ 57.29578) * lineLength, canvas.height/2 + Math.sin((lineAngle - 90) / 57.29578) * lineLength);
    ctx.stroke();
}
function refresh ()
{
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    dessinerAiguille(heures, h % 12 * 30, 70, 'lime', 10);
    dessinerAiguille(minutes, m * 6, 90, 'blue');
    dessinerAiguille(secondes, s * 6, 120, 'red', 3);

}

// Main
// dessinerAiguille(heures, 50, 50);
// dessinerAiguille(minutes, 30, 70, 'blue');
// dessinerAiguille(secondes, 0, 90, 'red');

refresh();
setInterval(refresh, 500);