const story =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";


//forma normal
const { performance } = require("perf_hooks");
let start = performance.now();

const reversed1 = story.split("").reverse().join("");

let time = performance.now() - start;

console.log(`This took ${time} milliseconds to run`);
console.log(reversed1);

//forma mas rapida
function strRev(str) {
  return [...str].reverse().join("");
}
console.log("");

start = performance.now();

let reversed2 = strRev(story);

let time1 = performance.now() - start;
console.log(`This took ${time1} milliseconds to run`);
console.log(reversed2);

//forma insinuada
function strRev1(str) {
  let rev = "";
  for (let char = str.length-1; char>=0; char--) {
    rev = rev + str[char];
  }
  
  return rev;
}
console.log("");

start = performance.now();

reversed2 = strRev1(story);

time1 = performance.now() - start;
console.log(`This took ${time1} milliseconds to run`);
console.log(reversed2);
