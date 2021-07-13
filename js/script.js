//refactoring code to work with array generated from list of elements innerText
figures = document.getElementsByClassName("fig"); var fg;
for(fg = 0; fg < figures.length; fg++) {
    console.log(figures[fg].innerText);
}


var controlBtns = document.getElementsByTagName("button");

//Toggle switch
var onSwitch = 0;

//seconds
seconds_Int2 = document.getElementById("seconds-right_fig").innerText * 1;
seconds_Int1 = document.getElementById("seconds-left_fig").innerText * 1;

//minutes
minute_Int2 = document.getElementById("minute-right_fig").innerText * 1;
minute_Int1 = document.getElementById("minute-left_fig").innerText * 1;

//hour
hour_Int2 = document.getElementById("hour-right_fig").innerText * 1;
hour_Int1 = document.getElementById("hour-right_fig").innerText * 1;


function startTimer() {
   if (onSwitch == 0) {
        onSwitch = 1;

        setInterval(() => {
            if (onSwitch == 1) {
                seconds_Int2 ++;
                document.getElementById("seconds-right_fig").innerText = seconds_Int2;
        
                if(seconds_Int2 == 10) {
                    seconds_Int2 = 0;
                    document.getElementById("seconds-right_fig").innerText = 0;
            
                    seconds_Int1 = document.getElementById("seconds-left_fig").innerText;
                    seconds_Int1++;
                    document.getElementById("seconds-left_fig").innerText = seconds_Int1;
                }
                if(seconds_Int1 == 6) {
                    seconds_Int1 = 0
                    document.getElementById("seconds-left_fig").innerText = 0;
            
                    minute_Int2++;
                    document.getElementById("minute-right_fig").innerText = minute_Int2;
                }
                if (minute_Int2 == 10) {
                    minute_Int2 = 0;
                    document.getElementById("minute-right_fig").innerText = minute_Int2;
            
                    minute_Int1++;
                    document.getElementById("minute-left_fig").innerText = minute_Int1;
            
                }
                if (minute_Int1 == 6) {
                    minute_Int1 = 0;
            
                    hour_Int2++;
                    document.getElementById("hour-right_fig").innerText = hour_Int2;
                }
                if (hour_Int2 == 10){
                    hour_Int2 = 0;
                    document.getElementById("hour-right_fig").innerText = 0;
            
                    hour_Int1++;
                    document.getElementById("hour-left_fig").innerText = hour_Int1;
                }
                if (hour_Int1 == 2) {
                    hour_Int1, hour_Int2, minute_Int1, minute_Int2, seconds_Int1,seconds_Int2 = 0;
                } else {
                }
            
            } else { 
                
            }

        }, 1000);

    } else {

    }
}

function resetTimer() {
    figures = document.getElementsByClassName("fig"); var fg;
    console.log(figures.length);

    for(fg = 0; fg < figures.length; fg++) {
        figures[fg].innerText = 0;
    }
    
}

function stopTimer() {
    onSwitch = 0;
}

controlBtns[0].addEventListener("click", function() {
   startTimer();
})
controlBtns[1].addEventListener("click", function() {
    stopTimer();
})
controlBtns[2].addEventListener("click", function() {
    resetTimer();
})
    