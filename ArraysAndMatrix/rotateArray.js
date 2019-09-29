function rotateArray(array) {
    let rotations = array.pop();

    for (let i = 0; i < rotations % array.length ; i++) {
        let elem = array.pop();
        array.unshift(elem);
        
    };
    console.log(array.join(' '));
}
rotateArray([
    '1', 
    '2', 
    '3', 
    '4', 
    '2'
]);