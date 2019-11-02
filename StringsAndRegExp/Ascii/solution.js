function solve() {

  const text = document.getElementById('text').value;
  const parts = text.split(' ');  
  let words = '';
  let numbers = '';
  parts.forEach(part => {
    if(isNaN(+part)) {
      //This is not a number
      
      words += [...part]
      .map(ch => ch.charCodeAt(0))
      .join(' ');
      words += '\n';
    } else {
      numbers += String.fromCharCode(+part);
    }
  });
  console.log(words);
  console.log(numbers);
  
};
