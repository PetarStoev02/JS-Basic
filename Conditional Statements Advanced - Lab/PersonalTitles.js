function title(age, sex) {
    age = Number(age);

    if (sex == "f") {
        if (age >= 16) {
            console.log("Ms.");
        }
        if (age < 16) {
            console.log("Miss");
        }
    }

    if (sex == "m") {
        if (age >= 16) {
            console.log("Mr.");
        }
        if (age < 16) {
            console.log("Master");
        }
    }
}
