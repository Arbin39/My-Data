// // Promise 

// function examplePromise() {
//     return new Promise(function(resolve, reject) {
//             resolve('hello world');
//     });
// }

// console.log(examplePromise());
// examplePromise()
// .then(function(result){
//     console.log('result is: result');
// })



const examplePromise =() => {
    return new Promise((resolve, reject) => {
        resolve([1,2,3]);
    } );
};

console.log(examplePromise());

examplePromise().then((result) => {
    console.log(result);
})

// handling error
.catch((error) => {
console.log("Error:", error);
})
// using finally
.finally (() => {
    console.log("This will always run");
})