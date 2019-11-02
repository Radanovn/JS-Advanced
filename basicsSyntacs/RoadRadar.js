function RoadRadar(input) {

    let speed = +input[0];
    let area = input[1];

    let motorway = 130;
    let interstate = 90;
    let city = 50;
    let residential = 20;

    if (area === 'residential') {
        if (speed > residential && speed <= residential + 20) {
            console.log('speeding');
        } else if (speed >= residential + 21 && speed <= residential + 40) {
            console.log('excessive speeding');

        } else if (speed <= residential) {
            console.log("");
        } else {
            console.log('reckless driving');
        }
    } else if (area === 'city') {
        if (speed > city && speed <= city + 20) {
            console.log('speeding');
        } else if (speed >= city + 21 && speed <= city + 40) {
            console.log('excessive speeding');

        } else if (speed <= city) {
            console.log("");
        } else {
            console.log('reckless driving');
        }

    } else if (area === 'interstate') {
        if (speed > interstate && speed <= interstate + 20) {
            console.log('speeding');
        } else if (speed >= interstate + 21 && speed <= interstate + 40) {
            console.log('excessive speeding');

        } else if (speed <= interstate) {
            console.log("");
        } else {
            console.log('reckless driving');
        }
    } else if (area === 'motorway') {
        if (speed > motorway && speed <= motorway + 20) {
            console.log('speeding');
        } else if (speed >= motorway + 21 && speed <= motorway + 40) {
            console.log('excessive speeding');

        } else if (speed <= motorway) {
            console.log("");
        } else {
            console.log('reckless driving');
        }
    }
}

RoadRadar([200, 'motorway'])