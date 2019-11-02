systemComponents = (array) => {

    const systems = {};

    array
        .forEach(el => {
            let [systemName, component, subComponent] = el.split(' | ');

            if (!systems.hasOwnProperty(systemName)) {
                systems[systemName] = {
                    [component]: [subComponent]
                };
            } else {
                if (!systems[systemName].hasOwnProperty(component)) {
                    systems[systemName][component] = [subComponent];
                } else {
                    systems[systemName][component].push(subComponent);

                };
            };


        });

    Object.entries(systems).sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0])).forEach(e => {
        console.log(e[0])
        Object.entries(e[1]).sort((a, b) => b[1].length - a[1].length).forEach(e => {
            console.log(`|||${e[0]}`)
            e[1].forEach(e => {
                console.log(`||||||${e}`)
            })
        })
    })
}



// systemComponents = (array) => {
//     const result = {};

//     array.forEach(elem => {
//         const [system, component, sub] = elem.split(' | ');
//         if (!result.hasOwnProperty(system)) {
//             result[system] = {
//                 [component]: [sub]
//             }
//         } else {
//             if (result[system].hasOwnProperty(component)) {
//                 result[system][component].push(sub)
//             } else {
//                 result[system][component] = [sub]
//             }
//         }
//     })
//     Object.entries(result).sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0])).forEach(e => {
//         console.log(e[0])
//         Object.entries(e[1]).sort((a, b) => b[1].length - a[1].length).forEach(e => {
//             console.log(`|||${e[0]}`)
//             e[1].forEach(e => {
//                 console.log(`||||||${e}`)
//             })
//         })
//     })
// }
systemComponents(
    [
        'SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security'
    ]
)