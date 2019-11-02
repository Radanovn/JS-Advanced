function CoffeeMachine(array) {

    let totalSum = 0;


    for (let el of array) {

        let [coins, type, cafDecaf, milk, sugar] = el.split(', ');

        let price = 0.80;

        coins = +coins;
        sugar = +sugar;

        // if (type === 'coffee' && cafDecaf === 'caffeine') {
        //     price = 0.80;

        // }
        // if (type === 'coffee' && cafDecaf === 'decaf') {
        //     price = 0.90;

        // }
        // if (type === 'tea') {
        //     price = 0.80;
        // }

        // if (milk) {
        //     price += 0.10;

        // }

        if (el.includes('decaf')) {
            price += 0.10;

        }
        if (el.includes('milk')) {
            price += 0.10;
        }
        if (el.split(', ').pop() > 0) {
            price += 0.10;
        }



        let difference = Math.abs(price - coins);

        if (coins >= price) {
            console.log(`You ordered ${type}. Price: $${price.toFixed(2)} Change: $${difference.toFixed(2)}`);
            totalSum += price;
        } else if (coins < price) {
            console.log(`Not enough money for ${type}. Need $${difference.toFixed(2)} more.`);

        }
    };
    console.log(`Income Report: $${totalSum.toFixed(2)}`);
}
CoffeeMachine(
    [
        '1.00, coffee, caffeine, milk, 4',
        '0.40, tea, milk, 2',
        '1.00, coffee, decaf, 0'
    ]
)