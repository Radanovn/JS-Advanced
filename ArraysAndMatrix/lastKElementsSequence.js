function lastKElementsSequence(n, k) {
    
    let result = [1];

    for (let i = 1; i < n; i++) {
        let current = result.slice(k * -1)
        .reduce((a, b) => a + b);
        
        result[i] = current;
    }
    console.log(result.join(' '));
    
}
lastKElementsSequence(
    8, 2

)