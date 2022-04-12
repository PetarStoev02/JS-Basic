function workshop(tables, lenght, wight) {
    tables = Number(tables);
    lenght = Number(lenght);
    wight = Number(wight);

    let rab = 0.3;
    let usd = 1.85;

    let tablespace = tables * (lenght + 2 * rab) * (wight + 2 * rab);
    let blanketspace = tables * (lenght / 2) * (lenght / 2);

    let priceusd = tablespace * 7 + blanketspace * 9;
    let priceleva = priceusd * usd;

    console.log(`${priceusd.toFixed(2)} USD`);
    console.log(`${priceleva.toFixed(2)} BGN`);
}
workshop(10, 1.2, 0.65);
