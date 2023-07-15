var blockSize = 15;
var rows = 35;
var cols = 35;
var board, context;

var sX = 5 * blockSize, sY = 5 * blockSize, fX, fY;
var speedX = 0, speedY = 0;
var snake = [];
var defeat = 0;

let points = 0;
//  var btn=document.get\
const startGame = () => {
    pointsUpdate(0);
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");
    targetReplace();
    document.addEventListener("keyup", snakeDirection);
    setInterval(update, 1000 / 10);
}

const stopGame = () => {
    sX = 5 * blockSize, sY = 5 * blockSize, fX, fY;
    speedX = 0, speedY = 0;
    snake = [];
    let disclaimer=document.getElementById('btn1');
    btn1.innerText="Press arrow key to continue";
    targetReplace();
    
}
const update = () => {

    context.fillStyle = "rgb(44,130,201)";
    context.fillRect(0, 0, board.height, board.width);

    context.fillStyle = "white";
    context.fillRect(fX, fY, blockSize, blockSize);


    if (sX == fX && sY == fY) {
        snake.push([fX, fY]);
        targetReplace();
        points += 1;
        console.log("Points:" + points);
        pointsUpdate(points);
        


    }

    for (let i = snake.length - 1; i > 0; i--) {
        snake[i] = snake[i - 1];
    }
    if (snake.length) {
        snake[0] = [sX, sY];
    }
    context.fillStyle = "black";
    sX += speedX * blockSize;
    sY += speedY * blockSize;
    context.fillRect(sX, sY, blockSize, blockSize);
    for (let i = 0; i < snake.length; i++) {
        context.fillRect(snake[i][0], snake[i][1], blockSize, blockSize);
    }

    if (sX < 0 || sX > cols * blockSize || sY < 0 || sY > rows * blockSize) {
        alert("Game Over!!!\nYour Score :" +points);
        pointsUpdate(0);
        points=0;
        stopGame();

    }
    for (let i = 0; i < snake.length; i++) {
        if (sX == snake[i][0] && sY == snake[i][1]) {
            alert("Game Over!!!\nYour Score :" +points);
            pointsUpdate(0);
            points=0;
            stopGame();
        }
    }

}
const targetReplace = () => {
    fX = Math.floor(Math.random() * cols) * blockSize;
    fY = Math.floor(Math.random() * rows) * blockSize;
}
const snakeDirection = (e) => {
    switch (e.code) {
        case "ArrowUp":
            if (speedY != 1) {
                speedX = 0;
                speedY = -1;

            }
            break;
        case "ArrowDown":
            if (speedY != -1) {
                speedX = 0;
                speedY = 1;
            }
            break;
        case "ArrowLeft":
            if (speedX != 1) {
                speedX = -1;
                speedY = 0;
            }
            break;
        case "ArrowRight":
            if (speedX != -1) {
                speedX = 1;
                speedY = 0;
            }
            break;
    }
    // console.log(speedX);
    // console.log(speedY);
}
let pointsUpdate = (p) => {
    
    let scoreUpdate=document.getElementById('ss');
    console.log(scoreUpdate);
    scoreUpdate.innerHTML = `Points: ${p}`;
}