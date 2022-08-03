// function getTime() {
// var now = new Date();
// var display = now.toLocaleTimeString();
// document.write("현재 시각은 " + display);	
// }
// function init(){
//   setInterval(getTime, 1000);

// }

// init();

const clock = document.querySelector('.h1-clock');


function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clock.innerHTML = `현재 시각 : ${hour<10 ? `0${hour}`:hour}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`
}


function init(){
    setInterval(getTime, 1000);
}

init();