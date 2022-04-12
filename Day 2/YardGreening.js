function YardGreening(squereM) {
    Prize = Number(squereM * 7.61).toFixed(2);
    discountPrice = Number(Prize * 0.18).toFixed(2);
    finalPrice = Number(Prize - discountPrice).toFixed(2);
    console.log(
        `The final price is: ${finalPrice} lv.
        The discount is: ${discountPrice} lv.`
    );
}

YardGreening(540);
