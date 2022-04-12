function solve(arg1, arg2, arg3) {
    let dificulty = Number(arg1);
    let rotation = Number(arg2);
    let pages = Number(arg3);

    if(dificulty>=80&&rotation>=80&&pages>=8){
        console.log("Legacy")
    }else if(dificulty>=80&&rotation<10){
        console.log("Master")
    }else if(rotation>50&&pages>=2){
        console.log("Hard")
    }else if(dificulty<30&&pages<1){
        console.log("Easy")
    }else if(dificulty<=10){
        console.log("Elementary")
    }else{
        console.log("Regular")
    }
}
solve(80,40,3);
