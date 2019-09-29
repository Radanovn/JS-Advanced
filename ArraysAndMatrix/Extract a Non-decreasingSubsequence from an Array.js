function extractANonDecreasingSubFromArray(array) {
    let newArr = [array[0]];
    let biggest;
    for (let i = 0; i < array.length; i++) {
        let biggest = array[i];
        let backElem = array[i-1];
            if (biggest >= backElem) {
                newArr.push(biggest);
            }

    }
    console.log(newArr.join('\n'));
}
extractANonDecreasingSubFromArray([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);