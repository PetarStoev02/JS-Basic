function PetShop(dogs, otherDogs) {
    let dogsPrize = Number(dogs * 2.5);
    let otherDogsPrize = Number(otherDogs * 4);
    console.log(Number(dogsPrize + otherDogsPrize).toFixed(2) + " lv.");
}
PetShop(13, 9);
