let person = {
    name: 'Arbin',
    college:'IIMS'
}

// let keys = Object.keys(person);
// for(const key of keys){
//     console.log(`value for key: ${key} is  ${person[key]} `)
// }

for(const key in person) {
    console.log(`Value of key: ${key} is ${person[key]}`);
}