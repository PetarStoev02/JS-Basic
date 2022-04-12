function solve(productString, num, budgetNum) {
    let sum = 0;
    let number = Number(num);
    let budget = Number(budgetNum);
    let product = productString;

    for (let i = 0; i < product.length; i++) {
        switch (product[i]) {
            case "a":
                sum += 3;
                break;
            case "e":
                sum += 3;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 3;
                break;
            case "u":
                sum += 3;
                break;
                default:
                    sum+=1
        }
    }
     sum*=number
    let moneyLeft = budget -(sum);
    if (budget < sum) {
        console.log(`Cannot buy ${product}. Product value: ${sum.toFixed(2)}`);
    } else if (sum <= budget) {
        console.log(`${product} bought. Money left: ${moneyLeft.toFixed(2)}`);
    }
}
solve("milk",
    1.4,
    8
    
    );
