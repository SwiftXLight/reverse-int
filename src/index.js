module.exports = function reverse (n) {  
  return Number(Array.from(String(Math.abs(n))).reverse().join(''));
}
console.log(reverse());
