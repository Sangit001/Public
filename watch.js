let miliseconds = document.getElementById('milisecond');
let seconds = document.getElementById('second')
let minutes = document.getElementById('minute')
let hours = document.getElementById('hour')
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let reset = document.getElementById('reset');
let milisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
let timerId = null;

startBtn.addEventListener('click',function(){
    if(timerId !== null) return;
   timerId =  setInterval(()=>{
        second = second+1;
        if(second == 60){
            minute = minute + 1;
            if(minute == 60){
                hour = hour+1;
                minute = 0;
            }
            second = 0;
        }
        shownOnScreen()
    },1000)
    reset.addEventListener('click',function(){
        second = 0;
minute = 0;
hour = 0;
shownOnScreen();
    })


});



stopBtn.addEventListener('click',function(){
    
clearInterval(timerId);


});

function shownOnScreen(){
    seconds.innerText = second; 
    minutes.innerText = minute +" : ";
    hours.innerText = hour + " : " ;
}
