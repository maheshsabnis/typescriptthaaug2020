var names = ["Tejas", "Mahesh", "Ramesh", "Ram", "Kaustubh", "Keshav"];
// name will by default becomes an instance of Array, it willn access
// all properties and methods of array class 
// traditional Itretaion using ES 3 with standard for loop
console.log('Standard for loop');
for (var i = 0; i < names.length; i++) {
    console.log("Name at " + i + "ths position = " + names[i]);
}
console.log();
console.log('ES 5 for..in loop');
for (var i in names) {
    console.log("Name at " + i + "ths position = " + names[i]);
}
console.log();
console.log('ES 6 for..of loop aka ES 6 iterator');
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var n = names_1[_i];
    console.log("name = " + n);
}
