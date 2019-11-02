function CalorieObject(array) {

    let obj = {};

    for (let i = 0; i < array.length; i += 2) {
        let food = array[i];
        let kcal = array[i + 1];

        obj[food] = +kcal;


    }
    console.log(obj);

}
CalorieObject([
    'Yoghurt', 48,
    'Rise', 138,
    'Apple', 52
])