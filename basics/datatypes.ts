// default type is 'any', the late binding and can have any value
let x;
console.log(`type of x = ${typeof(x)}`);
x = 100;
console.log(`type of x = ${typeof(x)} and value in x = ${x}`);
x = "Mahesh";
console.log(`type of x = ${typeof(x)} and value in x = ${x}`);
x = true;
console.log(`type of x = ${typeof(x)} and value in x = ${x}`);
x = new Date(2020,9,11);
console.log(`type of x = ${typeof(x)} and value in x = ${x}`);
x = {}; // object
console.log(`type of x = ${typeof(x)} and value in x = ${x}`);
x = function(){};
console.log(`type of x = ${typeof(x)} and value in x = ${x}`);

