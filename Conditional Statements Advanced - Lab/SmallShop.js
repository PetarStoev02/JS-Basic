function Shop(type, city, num) {
    number = Number(num);

    if (city == "Sofia") {
        if (type == "coffee") {
            console.log(0.5 * number);
        } else if (type == "water") {
            console.log(0.8*number);
        } else if (type == "beer") {
            console.log(1.2 * number);
        } else if (type == "sweets") {
            console.log(1.45 * num);
        } else if (type == "peanuts") {
            console.log(1.6*num);
        }
    }
    if (city == "Plovdiv") {
        if (type == "coffee") {
            console.log(0.40* number);
        } else if (type == "water") {
            console.log(0.7*number);
        } else if (type == "beer") {
            console.log(1.15 * number);
        } else if (type == "sweets") {
            console.log(1.30 * num);
        } else if (type == "peanuts") {
            console.log(1.5*num);
        }
    }
    if (city == "Varna") {
        if (type == "coffee") {
            console.log(0.45* number);
        } else if (type == "water") {
            console.log(0.7*number);
        } else if (type == "beer") {
            console.log(1.1 * number);
        } else if (type == "sweets") {
            console.log(1.35 * num);
        } else if (type == "peanuts") {
            console.log(1.55*num);
        }
    }
}
