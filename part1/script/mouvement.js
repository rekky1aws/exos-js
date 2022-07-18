// Constantes
    // Canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
    // Options
const axesTreshold = 0.2;
const imageHeight = 100;
const imageWidth = (252 / 411) * imageHeight;
const defaultDiff = 25;

// Variables
let x = (canvas.width / 2) - (imageWidth / 2);
let y = (canvas.height / 2) - (imageHeight / 2);
let gamepads = {};
let pressedKeys = {
    'ArrowUp': false,
    'ArrowDown': false,
    'ArrowLeft': false,
    'ArrowRight': false
};
let gamepadInterval;
let keyboardInterval;

// Fonctions
function drawImageOnCanvas ()
{
    let img = document.querySelector('img');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.drawImage(img, x, y, imageWidth, imageHeight);
}

function moveUp (diff = defaultDiff)
{
    if (y !== 0)
    {
        if (y - diff > 0) {
            y -= diff;
        } else {
            y = 0;
        }
        drawImageOnCanvas();
    }
}

function moveDown (diff = defaultDiff)
{
    if (y !== canvas.height - imageHeight)
    {
        if (y + diff < canvas.height - imageHeight) {
            y += diff;
        } else {
            y = canvas.height - imageHeight;
        }
        drawImageOnCanvas();
    }
}

function moveLeft (diff = defaultDiff)
{
    if (x !== 0)
    {
        if (x - diff > 0) {
            x -= diff;
        } else {
            x = 0;
        }
        drawImageOnCanvas();
    }
}

function moveRight (diff = defaultDiff)
{
    if (x !== canvas.width - imageWidth)
    {
        if (x + diff < canvas.width - imageWidth) {
            x += diff;
        } else {
            x = canvas.width - imageWidth;
        }
        drawImageOnCanvas();
    }
}

function moveRefresher ()
{
    if (pressedKeys.ArrowUp) {
        moveUp();
    }
    if (pressedKeys.ArrowDown) {
        moveDown();
    }
    if (pressedKeys.ArrowLeft) {
        moveLeft();
    }
    if (pressedKeys.ArrowRight) {
        moveRight();
    }
}

function switchKeyDown (event)
{
    pressedKeys[event.code] = true;
    if (!keyboardInterval) {
        keyboardInterval = setInterval(moveRefresher, 35);
    }
}

function switchKeyUp (event) {
    pressedKeys[event.code] = false;
    let allFalseFlag = true;
    Object.keys(pressedKeys).forEach(element => {
        if (pressedKeys[element]) {
            allFalseFlag = false;
        }
    });

    if (allFalseFlag) {
        clearInterval(keyboardInterval);
        keyboardInterval = null;
    }
}

function gamepadHandler(event, connecting) {
    let gamepad = event.gamepad;
    // Note :
    // gamepad === navigator.getGamepads()[gamepad.index]

    if (connecting) {
        gamepads[gamepad.index] = gamepad;
        gamepadInterval = setInterval(pollGamepad, 35);
    } else {
        delete gamepads[gamepad.index];
        if (gamepad.length == 0) {
            clearInterval(gamepadInterval);
        }
    }
}

function displayGamepadInfos (gamepads)
{
    const gamepadInfos = document.querySelector('#gamepad-infos');
    gamepadInfos.innerHTML = "";
    Object.keys(gamepads).forEach(element => {
        let gamepadInfosSection = document.createElement('div');
        gamepadInfosSection.className = "gamepad-infos-section";
        let result = `
            <div>
                <h3> Axes </h3>
                <ul>
                    <li>${gamepads[element].axes[0]}</li>
                    <li>${gamepads[element].axes[1]}</li>
                    <li>${gamepads[element].axes[2]}</li>
                    <li>${gamepads[element].axes[3]}</li>
                </ul>
            </div>
            <div>
                <h3> Buttons </h3>
                <ul> 
        `;
        gamepads[element].buttons.forEach((value, key) => {
            result += `<li>Button ${key} : ${value.pressed}</li>`
        })
        result += '</ul></div>';
        gamepadInfosSection.innerHTML = result;
        gamepadInfos.appendChild(gamepadInfosSection);
        // console.log(gamepads[element]);
    });

}

function pollGamepad ()
{
    gamepads = navigator.getGamepads();
    // console.log(gamepads[0].axes);
    // displayGamepadInfos (gamepads);
    if (gamepads[0].axes[0] <= (axesTreshold * -1))
    {
        moveLeft(Math.floor(gamepads[0].axes[0] * defaultDiff * -1));
    }

    if (gamepads[0].axes[0] >= axesTreshold) {
        moveRight(Math.floor(gamepads[0].axes[0] * defaultDiff));
    }

    if (gamepads[0].axes[1] <= (axesTreshold))
    {
        moveUp(Math.floor(gamepads[0].axes[1] * defaultDiff * -1));
    }

    if (gamepads[0].axes[1] >= axesTreshold) {
        moveDown(Math.floor(gamepads[0].axes[1] * defaultDiff));
    }
}

// EventListeners
window.addEventListener('keydown', switchKeyDown);
window.addEventListener('keyup', switchKeyUp);

window.addEventListener("gamepadconnected", function(e) {
    console.log("Manette connectée à l'indice %d : %s. %d boutons, %d axes.", e.gamepad.index, e.gamepad.id, e.gamepad.buttons.length, e.gamepad.axes.length); 
    gamepadHandler(e, true);
});

window.addEventListener("gamepaddisconnected", function(e) {
    console.log("Manette déconnectée à l'indice %d : %s", e.gamepad.index, e.gamepad.id);
    gamepadHandler(e, false);
});

// Main
drawImageOnCanvas();