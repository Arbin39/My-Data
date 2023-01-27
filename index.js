// // let Value = 'Hello World';
// // const anothervalue = "constant value";

// // console.log(Value);
// // console.log(Value);

// // Value = 'iims'
// // // console.log(Value);

// let Students= ['Ram', 'Sita', 'Hari'];

// // access first element
// let FirstElement = Students[0];
// console.log(FirstElement); // 'Ram'

// // access second element
// let secondElement = Students[1];
// console.log(secondElement); // 'mango'

// //lets change value of first element

// // previous value
// console.log(Students[0]); // apple

// // change value of first element
// fruits[0] = 'avocado';

// // Current value
// console.log(fruits[0]); 

// let fruits = ['apple', 'mango', 'pears'];
// fruits.push('avocado');
// console.log(fruits) // ['apple', 'mango', 'pears', 'avocado']

//Finding 
let sentences = ['this is hello world', 'iims website' ,'name']
const matchsentenceResult = sentences.find(function (element,index){
    return element.includes('iims');
});

console.log("searchresult is:", matchsentenceResult);
// Filter
let number = [5, 10, 15, 20]
const matchnumberResult = number.filter(function(element,index){
    return element < 20;
});
console.log("number:", matchnumberResult)
    