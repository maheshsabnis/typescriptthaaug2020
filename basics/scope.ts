function doWork(x){
    if(x) {
        let y = 10;
        console.log(`Inside if block y = ${y}`);
    }
    // console.log(`Outside of if block y = ${y}`);
    // y++;
    // console.log(`Outside of if block after increament y = ${y}`);
}
console.log('True value');
doWork(true);
console.log();
console.log('False value');
doWork(false);

for(let i=0; i< 4; i++) {
    console.log(`In loop i = ${i}`);
}

// console.log(`Out of loop i = ${i}`);
// i++;
// console.log(`Out of loop with increament i = ${i}`);
