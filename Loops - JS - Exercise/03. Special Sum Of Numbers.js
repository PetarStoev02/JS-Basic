function solve(startn, endn, dividerr) {
    let start = Number(startn);
    let end = Number(endn);
    let divider = Number(dividerr);
    let sum = 0;

    for (i = start; i <= end; i++) {
        if (i % divider === 0) {
            sum += i;
        }
    }
    console.log(sum);
}
solve(10, 30, 7);
