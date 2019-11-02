function fruit(fruit, weight, moneyCost) {

    let weightt = weight / 1000;
    let money = moneyCost * weightt;

    console.log(`I need $${money.toFixed(2)} to buy ${weightt.toFixed(2)} kilograms ${fruit}.`)


}






fruit('orange', 2500, 1.80);