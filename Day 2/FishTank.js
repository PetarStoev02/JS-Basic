function FishTank(length, width, hight, percent) {
    let volume = Number(length * width * hight);
    let volumeInLiters = Number(volume * 0.001);
    let percents=Number(percent*0.01);


    console.log(Number(volumeInLiters*(1-percents)).toFixed(3));
}
FishTank(105,77,89,18.5);
