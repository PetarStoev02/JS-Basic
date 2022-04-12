function rectangleArea(x1, y1, x2, y2) {
    let lenght = Number(Math.abs(x1 - x2));
    let width = Number(Math.abs(y1 - y2));
    let area = lenght * width;
    let perimeter = 2 * (lenght + width);
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
rectangleArea(30, 40, 70, -10);
