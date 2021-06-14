//seconds
seconds_Int2 = document.getElementById("seconds-right_fig").innerText * 1;
seconds_Int1 = document.getElementById("seconds-left_fig").innerText * 1;

//minutes
minute_Int2 = document.getElementById("minute-right_fig").innerText * 1;
minute_Int1 = document.getElementById("minute-left_fig").innerText * 1;

//hour
hour_Int2 = document.getElementById("hour-right_fig").innerText * 1;
hour_Int1 = document.getElementById("hour-right_fig").innerText * 1;


setInterval(() => {
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
    

   
}, 1);