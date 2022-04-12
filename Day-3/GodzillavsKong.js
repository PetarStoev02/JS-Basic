function godzila(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let people = Number(arg2);
    let onePersonClothing = Number(arg3);

    let decorSum = budget * 0.1;
    let sumPerClothing = people * onePersonClothing;
    let sumForFilm = decorSum + sumPerClothing;
    let leftBudget = budget - sumForFilm;
    let neededMoney = sumForFilm - budget;

    if (people > 150) {
        clothingDecrese = sumPerClothing - (sumPerClothing * 0.1).toFixed(3);
        decresFilmSum = clothingDecrese + decorSum;
        leftBudget = budget - decresFilmSum;
        neededMoney = decresFilmSum - budget;
    }
    if (sumForFilm > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
    }
    if (sumForFilm <= budget) {
        console.log("Action!");
        console.log(
            `Wingard starts filming with ${leftBudget.toFixed(2)} leva left.`
        );
    }
}
godzila(15437.62, 186, 57.99);
