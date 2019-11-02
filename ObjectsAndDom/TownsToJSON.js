function TownsToJSON(input) {

    for (let element of input) {
        let json = element.split(/| /)

        console.log(json);
    }





    // JSON.stringify(input[0].split("|"));

    // console.log(json);




}
TownsToJSON(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ]);