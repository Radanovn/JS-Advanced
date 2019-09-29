function printAnArrayWithAGivendelimeter(array) {
    
    let delimeter = array.pop();
    console.log(array.join(delimeter));
    
}
printAnArrayWithAGivendelimeter([
    'One', 
    'Two', 
    'Three', 
    'Four', 
    'Five', 
    '-']);