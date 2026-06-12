console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2 !=1);

console.log();

console.log("2">1);
console.log("02">1);

console.log();

console.log(null >0);
console.log(null ==0);
console.log(null >=0);

//the reason is that an equality check == and comparisons > < >= <= work differently.
//Comparisons convert null to a number , trating it as 0
//that's why null >=0 is true and null >0 is false
console.log();

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined <0);

// === it check value as well as datatypes
console.log();
console.log("2"===2)
