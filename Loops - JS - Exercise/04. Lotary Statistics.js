function solve(n) {
    let number = Number(n);
    let оddNumbers = 0;
    let evenNumbers = 0;
    let oddNumbers7 = 0;
    let number100 = 0;

    for (i = 1; i <= number; i++) {
        if (i % 2 === 1 && i < 10) {
            оddNumbers += 1;
        }
        if (i % 2 === 0) {
            evenNumbers += 1;
        }
        if (i % 2 === 1 && i % 10 === 7) {
            oddNumbers7 += 1;
        }
        if (100 % i === 0) {
            number100 += 1;
        }
    }
    let оddNumbersPersent = (оddNumbers / number) * 100;
    let evenNumbersPersent = (evenNumbers / number) * 100;
    let oddNumbers7Persent = (oddNumbers7 / number) * 100;
    let number100Persent = (number100 / number) * 100;

    console.log(`${оddNumbersPersent.toFixed(2)}%`);
    console.log(`${evenNumbersPersent.toFixed(2)}%`);
    console.log(`${oddNumbers7Persent.toFixed(2)}%`);
    console.log(`${number100Persent.toFixed(2)}%`);
}
solve(35);
