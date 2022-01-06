// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}

const { performance } = require('perf_hooks');
let start = performance.now();
let num = rFib(20);
let time = performance.now() - start;
console.log(`The recursive fib  ${num}`);
console.log(`This took ${time} milliseconds to run`);

start = performance.now();
num = iFib(20);
let time1 = performance.now() - start;
console.log(`The iterative fib is ${num}`);
console.log(`This took ${time1} milliseconds to run`);

time<time1?console.log('recursive is faster than iterative'):console.log('iterative is faster than recurcive');