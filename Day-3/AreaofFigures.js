function AreaofFigures(arg1, arg2, arg3) {
    let type = arg1;
    let result = 0;

    if (type === "square") {
        let side = Number(arg2);
        result = side * side;
    } else if (type === "rectangle") {
        let sideA = Number(arg2);
        let sideB = Number(arg3);
        result = sideA * sideB;
    } else if (type === "circle") {
        let radius = Number(arg2);
        result = Math.PI * radius * radius;
    } else if (type === "triangle") {
        let sideA = Number(arg2);
        let sideB = Number(arg3);
        result = (sideA * sideB) / 2;
    }
    console.log(result.toFixed(3));
}
AreaofFigures("triangle", 4.5, 20);
