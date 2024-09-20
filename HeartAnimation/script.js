let body = document.querySelector('body');

body.addEventListener('mousemove',(event)=>{
let xpos = event.offsetX+'px';
let ypos = event.offsetY+'px';

const span = document.createElement('span');
span.style.left = xpos;
span.style.top = ypos;
let size = Math.random()*100;
span.style.width  = size +'px';
span.style.height = size+'px';
body.appendChild(span);


 
setTimeout(function()
{
    span.remove();
},3000)
});