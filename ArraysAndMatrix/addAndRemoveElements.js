function addAndRemoveElements(array) {
    let newArray = [];
    let initialNum = 1;

    array.forEach(el => {
        let command = el;
        
        if(command === 'add') {
            newArray.push(initialNum);
            initialNum++;
        } else {
            newArray.pop();
            initialNum++;
        }
        
       
    });
    if (newArray.length === 0) {
        console.log('Empty');
        
    }
    console.log(newArray.join('\n'));
};
addAndRemoveElements(['remove', 
'remove', 
'remove']);