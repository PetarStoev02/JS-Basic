function records(seconds, metres, metresPerSecond) {
    seconds = Number(seconds);
    metres = Number(metres);
    metresPerSecond = Number(metresPerSecond);

    let time = metres * metresPerSecond;
    let bonusTime = ((Math.floor(metres / 15)) * 12.5.toFixed(2));

    let fulltime = time + bonusTime;


    if (seconds < fulltime) {
        let needTime = fulltime - seconds;
        console.log(
            ` No, he failed! He was ${needTime.toFixed(2)} seconds slower.`
        );
    } 
     if (seconds > fulltime) {
        console.log(
            ` Yes, he succeeded! The new world record is ${(fulltime).toFixed(2)} seconds.`
        );
    }
}

record(55555.67,
    3017,
    5.03,
    
    );
