usernames = (array) => {


    array = array.sort((a, b) => a.length - b.length || a.localeCompare(b))
    array = [...new Set(array)];


    console.log(array.join("\n"));
}


usernames(
    ['Denise', 'Denise',
        'Ignatius',
        'Iris',
        'Isacc',
        'Indie',
        'Dean',
        'Donatello',
        'Enfuego',
        'Benjamin',
        'Biser',
        'Bounty',
        'Renard',
        'Rot'
    ]
)