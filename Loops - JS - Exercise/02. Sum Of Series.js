function solve(number) {
    let num = Number(number);
    let sum = 0;

    for (i = 1; i <= num; i++) {
        sum += i * i;
    }
    console.log(sum)
}
solve();
