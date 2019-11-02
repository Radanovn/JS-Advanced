function storeCatalogue(array) {
    let catalogue = {};
    const alphaSort = (a, b) => a.localeCompare(b);

    array
        .forEach(el => {
            let [name, number] = el.split(' : ');
            number = +number;

            let initial = name[0];

            if (!catalogue.hasOwnProperty(initial)) {
                catalogue[initial] = {};
            };

            let products = catalogue[initial];

            if (!products.hasOwnProperty(name)) {
                products[name] = number;
            };
        });

    let sortedInitials = Object.keys(catalogue)
        .sort(alphaSort);
    for (let initial of sortedInitials) {
        console.log(initial);

        let products = catalogue[initial];
        let sortedProducts = Object.keys(products).sort(alphaSort);

        for (let p of sortedProducts) {
            console.log(`  ${p}: ${products[p]}`);


        };
    };
};
storeCatalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]

)