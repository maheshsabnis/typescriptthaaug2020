// implicit type declaration based on r.h.s. of expression
let x = 10; // number

console.log(`type of x = ${typeof(x)} and value in x = ${x}`);
// explicit type declaration
let x1:number;
x1 = 20;
console.log(`type of x = ${typeof(x)} and value in x = ${x}`);

let name1: string;
name1 = "MAhesh";
console.log(`type of name1 = ${typeof(name1)} and value in x = ${name1}`);
// union type
let value:number|string;
console.log(`type of value = ${typeof(value)}`);

value = 1000;
console.log(`type of value = ${typeof(value)} and value in value = ${value}`);
value = "Mahesh";
console.log(`type of value = ${typeof(value)} and value in value = ${value}`);

function processData(data:number|string){
    if(typeof(data) === 'number') {
        console.log(`Processing number ${ data * data * data}`);
    }
    
    if(typeof(data) === 'string') {
        console.log(`Processing string ${ data.toUpperCase()}`);
    } else {
        console.log('Data is not number nor string');
    }
}

// processData(10);
// processData('typescript');

let a = 1;
let b = "1";

console.log(a == b); // == value equality
console.log(a === b); // === deep equality means first type chack then value

 
