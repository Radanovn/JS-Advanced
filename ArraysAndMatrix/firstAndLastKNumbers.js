function firstAndLastKNumbers(array) {
    let k = array.shift();
    
  console.log(`${array.slice(0, k).join(' ')}\n${array.slice(k * -1, array.length).join(' ')}`);
 
  
  
}
firstAndLastKNumbers(
    [3,
        6, 7, 8, 9]
    );