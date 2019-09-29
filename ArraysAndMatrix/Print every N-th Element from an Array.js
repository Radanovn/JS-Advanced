function PrintEveryNthElementFromAnArray(array) {
    let step = +array.pop();


    for (let i = 0; i < array.length; i+=step) {
        let el = array[i];

        console.log(el);

    }
}
PrintEveryNthElementFromAnArray(
          [
        '5', 
        '20', 
        '31', 
        '4', 
        '20', 
        '2']
);