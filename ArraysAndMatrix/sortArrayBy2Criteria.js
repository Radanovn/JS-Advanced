function sorArrayByTwoCriteria(array) {
array.sort((a, b) => { 
    return a.length - b.length 
    || a.localeCompare(b);
    }).forEach(x => console.log(x));
    
};
sorArrayByTwoCriteria(
    ['alpha', 
'beta', 
'gamma']
);