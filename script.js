const button = document.querySelector('button');
const body = document.querySelector('body');
const color = ['Yellow', 'blue', 'green', 'red', 'gray'];

function clr(){
    const index = parseInt(Math.floor(Math.random() * color.length));
    body.style.backgroundColor = color[index];
}

body.style.backgroundColor = 'Grey';
button.addEventListener('click', clr);