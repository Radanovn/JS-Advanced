function solve() {
    let text = document.getElementById('text').value;
    const groupSize = +document.getElementById('number').value;

    if(text.length % groupSize > 0) {
        const remainder = text.length % groupSize;
        const charsToFill = groupSize - remainder;
        text = text + text.substr(0, charsToFill);
    };

    // const result = [...text]
    // .reduce((currentResult, ch, index) => ) {

    // }

    const result = [];
    for (let i = 0; i < text.length; i+= groupSize) {
        result.push(text.substr(i, groupSize))
        
    }
console.log(result.join(' '));

};   