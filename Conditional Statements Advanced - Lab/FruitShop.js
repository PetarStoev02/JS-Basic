function shop(food,day,num){
    let number= Number(num)
    switch (day) {
        case "Monday":
            if(food==="banana"){
                console.log((2.50*number).toFixed(2))
            }else if(food==="apple"){
                console.log((1.20*number).toFixed(2))
            }else if(food==="orange"){
                console.log((0.85*number).toFixed(2))
            }else if(food==="grapefruit"){
                console.log((1.45*number).toFixed(2))
            }else if(food==="pineapple"){
                console.log((5.50*number).toFixed(2))
            }else if(food==="grapes"){
                console.log((3.85*number).toFixed(2))
            }else if(food==="kiwi"){
                console.log((2.70*number).toFixed(2))
            }else{
                console.log("error");
            }
            break;
        case "Tuesday":
            if(food==="banana"){
                console.log((2.50*number).toFixed(2))
            }else if(food==="apple"){
                console.log((1.20*number).toFixed(2))
            }else if(food==="orange"){
                console.log((0.85*number).toFixed(2))
            }else if(food==="grapefruit"){
                console.log((1.45*number).toFixed(2))
            }else if(food==="pineapple"){
                console.log((5.50*number).toFixed(2))
            }else if(food==="grapes"){
                console.log((3.85*number).toFixed(2))
            }else if(food==="kiwi"){
                console.log((2.70*number).toFixed(2))
            }else{
                console.log("error");
            }
            break;
        case "Wednesday":
            if(food==="banana"){
                console.log((2.50*number).toFixed(2))
            }else if(food==="apple"){
                console.log((1.20*number).toFixed(2))
            }else if(food==="orange"){
                console.log((0.85*number).toFixed(2))
            }else if(food==="grapefruit"){
                console.log((1.45*number).toFixed(2))
            }else if(food==="pineapple"){
                console.log((5.50*number).toFixed(2))
            }else if(food==="grapes"){
                console.log((3.85*number).toFixed(2))
            }else if(food==="kiwi"){
                console.log((2.70*number).toFixed(2))
            }else{
                console.log("error");
            }
            break;
        case "Thursday":
            if(food==="banana"){
                console.log((2.50*number).toFixed(2))
            }else if(food==="apple"){
                console.log((1.20*number).toFixed(2))
            }else if(food==="orange"){
                console.log((0.85*number).toFixed(2))
            }else if(food==="grapefruit"){
                console.log((1.45*number).toFixed(2))
            }else if(food==="pineapple"){
                console.log((5.50*number).toFixed(2))
            }else if(food==="grapes"){
                console.log((3.85*number).toFixed(2))
            }else if(food==="kiwi"){
                console.log((2.70*number).toFixed(2))
            }else{
                console.log("error");
            }
            break;
        case "Friday":
            if(food==="banana"){
                console.log((2.50*number).toFixed(2))
            }else if(food==="apple"){
                console.log((1.20*number).toFixed(2))
            }else if(food==="orange"){
                console.log((0.85*number).toFixed(2))
            }else if(food==="grapefruit"){
                console.log((1.45*number).toFixed(2))
            }else if(food==="pineapple"){
                console.log((5.50*number).toFixed(2))
            }else if(food==="grapes"){
                console.log((3.85*number).toFixed(2))
            }else if(food==="kiwi"){
                console.log((2.70*number).toFixed(2))
            }else{
                console.log("error");
            }
            break;
        case "Saturday":
            if(food==="banana"){
                console.log((2.70*number).toFixed(2))
            }else if(food==="apple"){
                console.log((1.25*number).toFixed(2))
            }else if(food==="orange"){
                console.log((0.90*number).toFixed(2))
            }else if(food==="grapefruit"){
                console.log((1.60*number).toFixed(2))
            }else if(food==="pineapple"){
                console.log((5.60*number).toFixed(2))
            }else if(food==="grapes"){
                console.log((4.20*number).toFixed(2))
            }else if(food==="kiwi"){
                console.log((3.00*number).toFixed(2))
            }else{
                console.log("error");
            }
            break;
        case "Sunday":
            if(food==="banana"){
                console.log((2.70*number).toFixed(2))
            }else if(food==="apple"){
                console.log((1.25*number).toFixed(2))
            }else if(food==="orange"){
                console.log((0.90*number).toFixed(2))
            }else if(food==="grapefruit"){
                console.log((1.60*number).toFixed(2))
            }else if(food==="pineapple"){
                console.log((5.60*number).toFixed(2))
            }else if(food==="grapes"){
                console.log((4.20*number).toFixed(2))
            }else if(food==="kiwi"){
                console.log((3.00*number).toFixed(2))
            }else{
                console.log("error");
            }
            break;
        default:
            console.log("error");
            break;
    }

}
shop("grapes",
    "Saturday",
    0.5)