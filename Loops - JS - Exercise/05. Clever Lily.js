function solve(ageNumber, priceNumber, toyPriceNumber) {
    let age = Number(ageNumber);
    let price = Number(priceNumber);
    let toyprice = Number(toyPriceNumber);
    let toyNumber = 0;
    let sum = 0;
    let moneyTaken=0

    for (i = 1; i <= age; i++) {
        if(i%2!==0){
            toyNumber+=1
        }else{
            sum+=(moneyTaken+9)
            moneyTaken+=10
        }

    
    }
    let totaltoy = toyNumber * toyprice;
    let totalMoney = sum + totaltoy ;
    let moneyLeft = totalMoney - price;
    let moneyNeed = price - totalMoney;

    if (totalMoney >= price) {
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        console.log(`No! ${moneyNeed.toFixed(2)}`);
    }
}
solve(21, 1570.98, 3);
