function time(hoursAsStirng, minutesAsStirng) {
    let hours = Number(hoursAsStirng);
    let minutes = Number(minutesAsStirng) + 15;

    if (minutes >= 60) {
        minutes = minutes - 60;
        hours += 1;
    }if(hours>=24){
        hours-=24
        
    }

 if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}
time(23, 59);
