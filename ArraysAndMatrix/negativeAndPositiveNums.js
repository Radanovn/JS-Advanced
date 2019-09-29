function negativeAndPositiveNums(input) {
    let newArray = [];

input.forEach(el => {
    if(el >= 0 ){
        newArray.push(el);
    }else{
        newArray.unshift(el);
    }
});
console.log(newArray);

   
}
negativeAndPositiveNums([7, -2, 8, 9]); 