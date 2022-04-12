function solve(arg1, arg2) {
    let beeNumber = Number(arg1);
    let flower = Number(arg2);
    let honey = 0;

    honey = beeNumber * flower * 0.21;
    let honeyBun = Math.floor(honey / 100);
    let honeyBunLeft = honey % 100;

    console.log(`${honeyBun} honeycombs filled.`);
    console.log(`${honeyBunLeft.toFixed(2)} grams of honey left.`);
}
solve(11, 120);
