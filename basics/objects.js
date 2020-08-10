// object literal aka JSON object
// singleton for a declaring block
// contains Key:Value pair where value cna be be a function
// Key: function(){....} to access function use obj1.Key()
var obj1 = { x: 10 };
console.log("obj1.x = " + obj1.x);
var obj2 = obj1; // assigning obj1 to obj2, they will point to same memory loc
console.log("obj1.x = " + obj1.x + " and obj2.x = " + obj2.x);
obj2.x = 100;
console.log("After updaitng obj2.x,   obj1.x = " + obj1.x + " and obj2.x = " + obj2.x);
// using Object.assign()
// target = Object.assign({},source);
// source will be copied into new empty object and the target will point to that empty
// object
var obj3 = Object.assign({}, obj1);
console.log("obj1.x = " + obj1.x + " and obj3.x = " + obj3.x);
obj3.x = 2000;
console.log("After updaitng obj3.x,   obj1.x = " + obj1.x + " and obj3.x = " + obj3.x);
