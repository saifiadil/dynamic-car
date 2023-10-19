


// script.js
const circle = document.getElementById('circle');
const circles =  document.getElementById('circles')
const btn2 = document.getElementById('btn2');
const btn5 = document.getElementById('btn5');
const btn10 = document.getElementById('btn10');
const stop = document.getElementById('stop')
const road= document.querySelector('#road')
const tops =  document.getElementById('top')



btn2.addEventListener('click', () => rotateCircle(20));
btn5.addEventListener('click', () => rotateCircle(50));
btn10.addEventListener('click', () => rotateCircle(100));
stop.addEventListener('click', ()=> stopRotation());


//condition wheeland animation

function rotateCircle(speed) {
    

    if (speed === 20) {
       
         circle.style.animation = 'rotate 1s linear infinite';
         circles.style.animation = 'rotate 1s linear infinite';
         road.style.animation = 'scroll 40s linear infinite';
         tops.style.animation = 'top 2s linear infinite';

    } else if (speed === 50) {
        circle.style.animation = 'rotate 0.5s linear infinite';
        circles.style.animation = 'rotate 0.5s linear infinite';
        tops.style.animation = 'top 2s linear infinite';

        road.style.animation = 'scroll 20s linear infinite';

    } else if (speed === 100) {
        circle.style.animation = 'rotate 0.1s linear infinite';
        circles.style.animation = 'rotate 0.1s linear infinite';
        tops.style.animation = 'top 2s linear infinite';

        road.style.animation = 'scroll 5s linear infinite';

    } 

   

    
}




//stop
 
let animatedPaused = false;

function stopRotation(animatedPaused){
    circle.style.animationPlayState = 'paused';
    circles.style.animationPlayState = 'paused';
    road.style.animationPlayState = 'paused';
    tops.style.animationPlayState = 'paused';

   
    

}











