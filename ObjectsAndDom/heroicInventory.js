function heroicInventory(array) {

    let heroes = [];

    for (let line of array) {
        let [names, level, items] = line.split(' / ');

        level = +level;
        items = items ? items.split(', ') : [];

        heroes.push({ names, level, items })



    }
    console.log(JSON.stringify(heroes));

}
heroicInventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
)