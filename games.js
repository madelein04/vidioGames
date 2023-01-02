const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const btnReini = document.querySelector('.reiniciar');
const vidas = document.querySelector('.vidas');
const time = document.querySelector('.time');
const recordView = document.querySelector('.record');

let canvasSize;
let elementsSize;
let level = 0;
let lifes = 3;
let record = 50;

let timeStar;
let timePlayer;
let timeInterval;


const playerPosition = {
    x: undefined,
    y: undefined,
}

const giftPosition = {
    x: undefined,
    y: undefined,
}

let enemyPositions = [];

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

/*function fixNumber(n) {
    return Number(n.toFixed(2));
}*/

function setCanvasSize() {
    if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.7;
    } else {
    canvasSize = window.innerHeight * 0.7;
    }
    
    canvasSize = Number(canvasSize.toFixed(0));

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    
    elementsSize = canvasSize / 10;
    
    playerPosition.x = undefined;
    playerPosition.y = undefined;

    startGame();
}

function startGame() {
    console.log({ canvasSize, elementsSize });

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';

    const map = maps[level];

    if (!map) {
        gameWin();
        return
    }
    
    if (!timeStar) {
        timeStar = Date.now();
        timeInterval = setInterval(showTime, 100);
        showRecord();
    }

    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log({ map, mapRows, mapRowCols });

    lifesPlayer();
    
    enemyPositions = [];
    game.clearRect(0, 0, canvasSize, canvasSize);

    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);
            if (col == 'O') {
                if (!playerPosition.x && !playerPosition.y) {
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    console.log({ playerPosition });
                }
            } else if (col == 'I') {
                giftPosition.x = posX;
                giftPosition.y = posY;
                console.log({ giftPosition });
                console.log({ playerPosition });
            } else if (col == 'X') {
                enemyPositions.push({
                    x: posX,
                    y: posY,

                })
            }
            
            game.fillText(emoji, posX, posY);
        });
    });
    moverJugador()
}

function moverJugador() {
    const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const giftCollision = giftCollisionX && giftCollisionY;
    if (giftCollision) {
        levelWin();
    }
    const enemyCollision = enemyPositions.find(enemy => {
        const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
        return enemyCollisionX && enemyCollisionY;        
    });
    if (enemyCollision) {
        levelOver();
    }

    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);

}

function levelWin() {
    console.log('win');
    level++;
    startGame()
}

function gameWin() {
    console.log('Fin del juego !!!');
    clearInterval(timeInterval)

    const recordTime = localStorage.getItem('record_time');
    const playerTime = Date.now() - timeStar;
    if (recordTime) {
        if (recordTime >= playerTime) {
            localStorage.setItem('record_time', playerTime);
            console.log('Superaste el record :D');
        
        } else {
            console.log('No superaste el record :(');
        }

    } else {
        localStorage.setItem('record_time', playerTime);
        record.innerHTML = 'Primera vez? Muy bien, pero ahora trata de superar tu tiempo :)';
    }
    console.log({recordTime, playerTime});
}

console.log(lifes);
function levelOver() {
    console.log('chocaste con un enemigo:(');
    lifes--;

    if (lifes  <= 0) {
        level = 0;
        lifes = 3;
        timeStar = undefined;
    } 
    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame();
}

function lifesPlayer() {
    vidas.innerHTML = emojis['HEART'].repeat(lifes);
}

function showTime(){
    
    time.innerText = +((Date.now()-timeStar)/100000).toFixed(3);

}

function showRecord(){
    
    recordView.innerText = (localStorage.getItem ('record_time')/100000).toFixed(3);

}



window.addEventListener("keydown", (teclaPresionada) => {
    let tecla = teclaPresionada.key;

    switch (tecla) {
        case "ArrowUp":
        moveUp();
        break;

        case "ArrowDown":
        moveDown();
        break;

        case "ArrowLeft":
        moveLeft();
        break;

        case "ArrowRight":
        moveRight();
        break;

        case "w":
        moveUp();
        break;

        case "s":
        moveDown();
        break;

        case "a":
        moveLeft();
        break;

        case "d":
        moveRight();
            break;
        
        default:
        break; 
    }

});

btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);
btnReini.addEventListener('click', reini);
function moveUp() {
    playerPosition.y -= elementsSize;
    playerPosition.y = Math.max(elementsSize, playerPosition.y)
    startGame();
}
function moveLeft() {
    playerPosition.x -= elementsSize;
    playerPosition.x = Math.max(elementsSize, playerPosition.x)
    startGame();
}
function moveRight() {
    playerPosition.x += elementsSize;
    playerPosition.x = Math.min(canvasSize, playerPosition.x)
    startGame();
}
function moveDown() {
    playerPosition.y += elementsSize;
    playerPosition.y = Math.min(canvasSize, playerPosition.y)
    startGame();
}

function reini() {
    console.log('reini');
    window.location.reload(); ;
}






