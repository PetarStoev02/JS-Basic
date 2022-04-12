function solve(arg1, arg2, arg3) {
    let intelect = Number(arg1);
    let stenght = Number(arg2);
    let sex = arg3;

    if (intelect >= 80 && stenght >= 80 && sex === "female") {
        console.log(`Queen Bee`);
    } else if (intelect >= 80) {
        console.log(`Repairing Bee`);
    } else if (intelect >= 60) {
        console.log("Cleaning Bee");
    } else if (stenght >= 80 && sex === "male") {
        console.log("Drone Bee");
    } else if (stenght >= 60) {
        console.log(`Guard Bee`);
    }else{
        console.log(`Worker Bee`)
    }
}
solve(90, 65, "male");
