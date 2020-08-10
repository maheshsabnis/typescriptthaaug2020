let names = ["Tejas", "Mahesh", "Ramesh", "Ram", "Kaustubh", "Keshav"];
names.forEach((v,idx)=> {
    if(v.length < 5) {
        console.log(v);
    }
});
console.log();
// using filter, method that will return and array of matching values based on conditon
let res = names.filter((v,idx) => {
    return v.length < 5;
});
console.log(JSON.stringify(res)); 

console.log(`Index of Ram is array ${names.indexOf('Ram')}`);
names.push('Anil');
names.push('Abhay');
names.push('Jaywant');
names.push('Anil');
names.forEach((v,idx)=> {
        console.log(v);
});

console.log(`First Index of Anil is array ${names.indexOf('Anil')}`);
console.log(`Last Index of Anil is array ${names.lastIndexOf('Anil')}`);
let d = names.splice(5,2); // start from 5th index delete 2 values
console.log(JSON.stringify(d)); 
console.log(JSON.stringify(names)); 
