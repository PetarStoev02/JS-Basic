function solve(arg1, arg2, agr3) {
    let bees = Number(arg1);
    let bearHealt = Number(arg2);
    let bearDamege = Number(agr3);
    let flag = 0;

    while (flag <= 0) {
        bees -= bearDamege;
        bearHealt -= bees * 5;
        if (bearHealt <= 0) {
            flag += 1;
            break;
        }else if(bees<100){
            flag+=1
            break
        }
    }

    if (bees <= 0) {
        bees = 0;
    }
    if (bearHealt <= 0) {
        console.log(`Beehive won! Bees left ${bees}.`);
    } else if (bees < 100) {
        console.log(`The bear stole the honey! Bees left ${bees}.`);
    }
}
solve(200, 1000, 10);
