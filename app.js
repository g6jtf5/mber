const container = document.getElementById('container');

const listImage = ['./image/bevy1.jpg', './image/bevy2.png', './image/bevy3.jpg', './image/bevy4.jpg', './image/bevy5.jpg', './image/bevy6.jpg', './image/bevy7.jpg', './image/bevy8.jpg']

const createImg = (x, y, link) => {
    const newImg = document.createElement('img');

    newImg.className = 'bevy';
    newImg.style.right = x + '%';
    newImg.style.top = y + '%';
    newImg.src = listImage[link];

    container.appendChild(newImg);
}

const createDot = (x, y) => {
    const newDot = document.createElement('div');

    newDot.className = 'dot';
    newDot.style.top = y + 'px';
    newDot.style.left = x + 'px';

    container.appendChild(newDot);
}

for(let i = 0; i < 9; i++) {
    var randy = Math.floor(Math.random()*8)*10;
    var randx = Math.floor(Math.random()*8)*10;
    var randlink = Math.floor(Math.random()*8);

    console.log(randlink)
    createImg(randx, randy, randlink);
}

document.addEventListener("click", (event) => {
    let mousex = event.clientX;
    let mousey = event.clientY;
    console.log([mousex, mousey]);

    createDot(mousex, mousey);
});