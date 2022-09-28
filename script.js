let alarmTime=null;
let alarmTimeout =null;

function updateWatch(){
        const date=new Date();
        const hours= formatTime(date.getHours());
        const minutes= formatTime(date.getMinutes());
        const seconds= formatTime(date.getSeconds());


        let clockTime= document.getElementById("time");
         clockTime.innerText = `${hours} : ${minutes} : ${seconds}`;

    };
function formatTime(time){
        if (time<10) {
            return "0"+time;
        }
        return time;
    };

const settime =document.getElementById("set");
settime.addEventListener("click",setAlarm);


function setAlarm(){
    alarmTime = document.getElementById('input-time').value;
    console.log(alarmTime);
    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm>current){
            const timeOut =timeToAlarm.getTime() - current.getTime();
            alarmTimeout= setTimeout(() =>  {alert("Alarm set")}, timeOut);
        hhhhhj



        
        }
    }
};

const clearTime=document.getElementById("clear");
clearTime.addEventListener("click",clearAlarm);

function clearAlarm(){
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert("Alarm cleared");
    }
};

setInterval(updateWatch,1000);
