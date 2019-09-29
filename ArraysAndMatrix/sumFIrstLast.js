function sumFirstLast(input) {

    let first = Number(input[0])
    let last = Number(input[input.length - 1]);
    
    if (input.length > 1) {
        console.log(first + last);
    } else {
        console.log(first * 2);
        
    }


}
sumFirstLast(
    ['5']
)