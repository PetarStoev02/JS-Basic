function NumberR(num) {
    num = Number(num);
    if (num >=-100 && num <= 100 && num!=0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
NumberR(-101);
