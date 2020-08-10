let names = ["Tejas", "Mahesh", "Ramesh", "Ram", "Kaustubh", "Keshav"];
// iteration method

function show(v:string, idx: number): void {
    console.log(`value at index ${idx} = ${v}`);
}
names.forEach(show); // callback approach

console.log();
console.log('Callback function pass');
names.forEach(function(v:string, idx: number) {
    console.log(`value at index ${idx} = ${v}`);
});
console.log();
console.log('Using Arrow operators');
// if a function accepts callback then replace the callback
// parameter using Arrow operator
names.forEach((v:string, idx: number)=> {
    console.log(`value at index ${idx} = ${v}`);
});