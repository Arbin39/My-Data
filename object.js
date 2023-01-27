// // first method of object calling
// let animal = {}
//     animal.Name ='cow'
//     animal.legs ='4'
//     animal.age ='59';

//     console.log(animal)
// //another methoed of object calling
//     let mammal ={
//         name:"cow" ,
//         age: 14 ,
//         colour: "red" ,
//     };

//     console.log(mammal)

//     mammal.eyes = 2;
//     console.log =("Colour of mammal is:", mammal.colour);



// //Introduction

// let myintro ={
// name:"Arbin",
// age:16,
// college:"IIMS",
// Lastname: "Maharjan"
// };
// console.log(myintro)


// myintro["college"] = "ABC"
// console.log("update colour")


// //updating 
// mammal["colour"] ='blue'

// //deleting 
// delete mammal.colour;
// console.log("update colour of mammal is: ", mammal);


// console.log("Animals Object:", Object.keys(animal));

// // 
// // let countries = ['nepal','india', 'japan'];

// // countries.forEach(function(element) {
// //     console.log("country name is:")
// // })

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