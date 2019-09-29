function evenPositionElements(input) {
    let evenNum = input;
    // let result = '';
    // evenNum.map((even) => {
    //     if (even % 2 !== 0) {
          
    //     }


    // });
   
    evenNum.forEach(el => {
        if (evenNum.indexOf(el) % 2 === 0) {
            // string += el
            process.stdout.write(`${el} `);

        };

    });
}
evenPositionElements(
    ['5', '10', '23']
)