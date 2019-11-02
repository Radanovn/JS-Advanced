function CappyJuice(array) {
    let juices = {};
    let bottles = {};
    array
        .forEach((line) => {
            let [fruit, quantity] = line.split(' => ');
            quantity = Number(quantity);

            if (!juices.hasOwnProperty(fruit)) {
                juices[fruit] = 0;
            };
            juices[fruit] += quantity;
            let currentQuantity = juices[fruit];

            if (currentQuantity >= 1000) {
                bottles[fruit] = Math.trunc(currentQuantity / 1000);
            };

        });
    for (let key in bottles) {
        let quantity = bottles[key];

        console.log(`${key} => ${quantity}`);


    };
};


CappyJuice(
    ['Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549'
    ]

)