function solve(arg1, arg2, arg3) {
    let students = Number(arg1);
    let question = 0;
    let totalzad = 0;
    let totalquestons = 0;
    let trainerEnergy = Number(arg3);
    let zad = Number(arg2);

    while (trainerEnergy > 0) {
        if (students < 10) {
            console.log(`The students are too few!`);
            console.log(`Problems solved: ${totalzad}`);
            break;
        }
        trainerEnergy += 2 * zad;
        students -= zad;
        question += students * 2;
       trainerEnergy -= 3 * question;
       
        

        totalquestons += question;
        totalzad += zad;
        if (students >= 10 && trainerEnergy !== 0) {
           students+=students/10*1

            question = 0;
        }
    }
    if (trainerEnergy <= 0) {
        console.log(`The trainer is too tired!`);
        console.log(`Questions asked: ${totalquestons}`);
    }
}
solve(20, 5, 500);
