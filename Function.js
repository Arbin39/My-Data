// //Function Method 1

// function getfulname(firstName, lastName) {
//     return firstName +" " +lastName;
// }

// //Function Method 2
// console.log(getfulname("ram","SHarma"));

// function getmyinfo(fullname,age) {
//     return `My full name is ${fullname} and my age is ${age}.`;
// }

// console.log(getmyinfo(`shaym maharjan`, 20));

// // console.log{getValue("hari ram")};
// // console.log{getValue([1,2])};



// // Array Function
// const helloWorld =() => {
//     return 'hello world'
// }
// console.log(helloWorld());

// function oldFunction(firstName, lastName) {
//     return `Hello ${firstName} ${lastName}`;

// }
// let newFunction = (firstName, lastName) => {
//     return `Hello ${firstName} ${lastName}`;
// } 
// console.log(newFunction(`Hello`, `World`));


function getfullname(firstname, lastname ,makeuppercb ) {
    return makeuppercb (`${firstname} ${lastname}`);
}

function makeupper(name){
    return name.toUpperCase();
}

let fullname = getfullname("Arbin", "Maharjan", makeupper);
console.log(fullname);