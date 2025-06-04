const order=[200,450,130,50,1000,20];

// filter()
let order1=order.filter((value)=> {
    return value>100
})
console.log(order1);


// map()
let order2=order.map((value)=> {
    return value-10
})
console.log(order2);


// reduce()
let order3=order2.reduce(function (a,b) {
    return a+b
})
console.log("total is "+order3);

// forEach()
order.forEach(function(x) {
    console.log(x);
})
