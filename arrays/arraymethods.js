var names = ["Tejas", "Mahesh", "Ramesh", "Ram", "Kaustubh", "Keshav"];
// iteration method
function show(v, idx) {
    console.log("value at index " + idx + " = " + v);
}
names.forEach(show); // callback approach
console.log();
console.log('Callback function pass');
names.forEach(function (v, idx) {
    console.log("value at index " + idx + " = " + v);
});
console.log();
console.log('Using Arrow operators');
// if a function accepts callback then replace the callback
// parameter using Arrow operator
names.forEach(function (v, idx) {
    console.log("value at index " + idx + " = " + v);
});
