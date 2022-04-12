function solve(day, roomType, grade) {
    let days = Number(day);
    let prize = 0;
    let saleprize = 0;
    switch (roomType) {
        case "room for one person":
            if (days >0&& days< 10) {
                prize = (days-1) * 18;
                saleprize = prize ;  
                if (grade == "positive") {
                    console.log((saleprize + saleprize * 0.25).toFixed(2));
                }
                if (grade == "negative") {
                    console.log((saleprize - saleprize * 0.1).toFixed(2));
                }
            } else if (days >= 10 && days <= 15) {
                prize = (days-1) * 18;
                saleprize = prize ;
                if (grade == "positive") {
                    console.log((saleprize + saleprize * 0.25).toFixed(2));
                }
                if (grade == "negative") {
                    console.log((saleprize - saleprize * 0.1).toFixed(2));
                }
            } else if (days > 15) {
                prize = (days-1) * 18;
                saleprize = prize ;
                if (grade == "positive") {
                    console.log((saleprize + saleprize * 0.25).toFixed(2));
                }
                if (grade == "negative") {
                    console.log((saleprize - saleprize * 0.1).toFixed(2));
                }
            }
            if (days == 0) {
                prize = (days+1) * 18;
                saleprize = prize ;
                if (grade == "positive") {
                    console.log((saleprize + saleprize * 0.25).toFixed(2));
                }
                if (grade == "negative") {
                    console.log((saleprize - saleprize * 0.1).toFixed(2));
                }
            }
            break;
        case "apartment":
            if (days >0&& days< 10) {
                prize = (days - 1) * 25;
                saleprize = prize - prize * 0.3;

                if (grade == "positive") {
                    console.log((saleprize + saleprize * 0.25).toFixed(2));
                }
                if (grade == "negative") {
                    console.log((saleprize - saleprize * 0.1).toFixed(2));
                }
            } else if (days >= 10 && days <= 15) {
                prize = (days - 1) * 25;
                saleprize = prize - prize * 0.35;

                if (grade == "positive") {
                    console.log((saleprize + saleprize * 0.25).toFixed(2));
                }
                if (grade == "negative") {
                    console.log((saleprize - saleprize * 0.1).toFixed(2));
                }
            } else if (days > 15) {
                prize = (days - 1) * 25 ;
                saleprize = prize - prize * 0.5;

                if (grade == "positive") {
                    console.log((saleprize + saleprize * 0.25).toFixed(2));
                }
                if (grade == "negative") {
                    console.log((saleprize - saleprize * 0.1).toFixed(2));
                }
            }
            if (days == 0) {
                prize = (days +1) * 25;
                saleprize = prize - prize * 0.3;

                if (grade == "positive") {
                    console.log((saleprize + saleprize * 0.25).toFixed(2));
                }
                if (grade == "negative") {
                    console.log((saleprize - saleprize * 0.1).toFixed(2));
                }
            }
            break;
        case "president apartment":
            if (days >0&& days< 10) {
                prize = (days - 1) * 35;
                saleprize = prize - prize * 0.1;

                if (grade == "positive") {
                    console.log((saleprize + saleprize * 0.25).toFixed(2));
                }
                if (grade == "negative") {
                    console.log((saleprize - saleprize * 0.1).toFixed(2));
                }
            } else if (days >= 10 && days <= 15) {
                prize = (days - 1) * 35;
                saleprize = prize - prize * 0.15;

                if (grade == "positive") {
                    console.log((saleprize + saleprize * 0.25).toFixed(2));
                }
                if (grade == "negative") {
                    console.log((saleprize - saleprize * 0.1).toFixed(2));
                }
            } else if (days > 15) {
                prize = (days - 1) * 35;
                saleprize = prize - prize * 0.2;

                if (grade == "positive") {
                    console.log((saleprize + saleprize * 0.25).toFixed(2));
                }
                if (grade == "negative") {
                    console.log((saleprize - saleprize * 0.1).toFixed(2));
                }
            } if (days == 0) {
                prize = (days +1) * 35;
                saleprize = prize - prize * 0.1;

                if (grade == "positive") {
                    console.log((saleprize + saleprize * 0.25).toFixed(2));
                }
                if (grade == "negative") {
                    console.log((saleprize - saleprize * 0.1).toFixed(2));
                }
            }
            break;
            default:
                console.log("error")

    }
}
solve(10,
    "room for one person",
    "positive",
    
    );
