const hoursspan = document.querySelector(".hours");
        const minutesspan = document.querySelector(".minutes");
        const secondsspan = document.querySelector(".seconds");
        const startbtn = document.querySelector(".startbtn");
        const lapbtn = document.querySelector(".lapbtn");
        const stopbtn = document.querySelector(".stopbtn");
        const laps = document.querySelector(".laps");
        
        let hours =0,
            minutes=0,
            seconds=0;

        var stopwatch;


        startbtn.addEventListener("click",()=>{
            startbtn.style.display = "none";
            lapbtn.style.display ="inline-block";
            stopbtn.style.display ="inline-block";

            stopwatch = setInterval(()=>{
                seconds++;
                if(seconds==60){
                  seconds=0;
                  minutes++;
                }
                if (minutes==60){
                    minutes=0;
                    hours++;
                }
                if(hours<=9) hoursspan.innerText ="0"+hours +":";
                else hoursspan.innerText= hours+":";
                if(minutes<=9) minutesspan.innerText ="0"+minutes +":";
                else minutesspan.innerText=minutes+":";
                if(seconds<=9) secondsspan.innerText ="0"+seconds;
                else secondsspan.innerText=seconds;
            },1000);
        });
        lapbtn.addEventListener("click",()=>{
            const lap = document.createElement("div");
            lap.innerText= hours+":"+minutes+":"+seconds;
            laps.appendChild(lap);
        });
        stopbtn.addEventListener("click",()=>{
            lapbtn.style.display = "none";
            stopbtn.style.display ="none";
            startbtn.style.display ="inline-block";
             clearInterval(stopwatch);
             document.querySelector(".hours").innerHTML="00:";
             document.querySelector(".minutes").innerHTML="00:";
             document.querySelector(".seconds").innerHTML="00";

            hours ="0";
            minutes ="0";
            seconds ="0";
            laps.innerHTML="<p>laps-</p>";

        });