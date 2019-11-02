function CookingByNumbers(array) {

    let number = +array.shift();

    for (let elem of array) {
        if (elem === 'chop') {
            number /= 2;
        } else if (elem === 'dice') {
            number = Math.sqrt(number);
        } else if (elem === 'spice') {
            number += 1;
        } else if (elem === 'bake') {
            number *= 3;
        } else if (elem === 'fillet') {
            number = (number * 0.8).toFixed(1);
        }
        console.log(number);

    }
}
CookingByNumbers(
    ['9', 'dice', 'spice', 'chop', 'bake', 'fillet']
)