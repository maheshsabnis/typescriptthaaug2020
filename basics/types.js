// implicit type declaration based on r.h.s. of expression
var x = 10; // number
console.log("type of x = " + typeof (x) + " and value in x = " + x);
// explicit type declaration
var x1;
x1 = 20;
console.log("type of x = " + typeof (x) + " and value in x = " + x);
var name1;
name1 = "MAhesh";
console.log("type of name1 = " + typeof (name1) + " and value in x = " + name1);
// union type
var value;
console.log("type of value = " + typeof (value));
value = 1000;
console.log("type of value = " + typeof (value) + " and value in value = " + value);
value = "Mahesh";
console.log("type of value = " + typeof (value) + " and value in value = " + value);
function processData(data) {
    if (typeof (data) === 'number') {
        console.log("Processing number " + data * data * data);
    }
    if (typeof (data) === 'string') {
        console.log("Processing string " + data.toUpperCase());
    }
    else {
        console.log('Data is not number nor string');
    }
}
// processData(10);
// processData('typescript');
var a = 1;
var b = "1";
console.log(a == b); // == value equality
console.log(a === b); // === deep equality means first type chack then value
