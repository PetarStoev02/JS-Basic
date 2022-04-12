function solve(arg1, arg2) {
    let population = Number(arg1);
    let years = Number(arg2);

    for (i = 1; i < years; i++) {
        population += Math.floor((population / 10) * 2);

        if (i % 5 === 0) {
            population -= Math.floor((population / 50) * 2);
        }
        population -= Math.floor((population / 20) * 2);
    }

    console.log(`Beehive population: ${population}`);
}
solve(100, 6);
