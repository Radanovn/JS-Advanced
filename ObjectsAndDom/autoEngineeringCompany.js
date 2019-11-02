function autoEngineeringCompany(array) {

    let cars = {};

    array.forEach(el => {
        let [car, model, quantity] = el.split(' | ');
        quantity = +quantity;


        if (!cars.hasOwnProperty(car)) {
            cars[car] = {
                [model]: quantity
            };
        } else {

            if (cars[car].hasOwnProperty(model)) {
                cars[car][model] += quantity;
            } else {
                cars[car][model] = quantity;
            };
        };
    });

    Object.entries(cars)
        .forEach((e => {
            console.log(e[0]);

            Object.entries(e[1])
                .forEach((e => {
                    console.log(`###${e[0]} -> ${e[1]}`);

                }));
        }));
};
autoEngineeringCompany(
    [
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]
);