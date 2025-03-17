let Timer = document.getElementById("Timer");
let timer;
let running = false;
let ms = 0;
let seconds = 0;
let minutes = 0;
let hours   = 0;


function update() {
    document.querySelector("#Timer").innerText =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds+":"+
        (ms<10 ? "0" : "")+ms;

}

function startbtn() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            ms++;

            if(ms==100){
                ms = 0;
                seconds++;
            }

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            update();
        }, 10);
    }
}

function stopbtn() {
    clearInterval(timer);
    running = false;
}

function resetbtn() {
    stopbtn();
    ms = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    update();
    let pinList = document.getElementById("pinTimerContainer");
    pinList.innerHTML = "";
  
}


function pinbtn() {
    let pinnedTime = document.getElementById("Timer")?.innerText || "00:00:00:00";
    let listItem = document.createElement("li");
    listItem.innerHTML = `📌 ${pinnedTime}`;
    
    let pinList = document.getElementById("pinTimer");
    
    pinList.appendChild(listItem);

    if (pinList.children.length > 4) {
        pinList.removeChild(pinList.firstElementChild);
    }

    setTimeout(() => {
        pinList.scrollTo({ top: pinList.scrollHeight, behavior: 'smooth' });
    }, 10);
}

