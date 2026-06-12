console.log();
// primitive data types

//  7 categories = String || number || boolean 
//                  null || undefined || symbol || BigInt


// Reference ( Non primitive)

// Array , Objects , Functions

const score = 100
const scorevalue = 100.78

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 9876543993421n


//reference -- non primitive
// arrays objects functions

const heros = ["vinay","sahil","nagaroo"]

let myObj = {
    name: "Vinay",
    age :21
}

const myFunction = function(){

console.log("Hello javascript");

}

//how to find the types of datatypes 
console.log(typeof myFunction);

