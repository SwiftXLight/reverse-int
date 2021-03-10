function reverse(n) {  
  return Number(Array.from(String(Math.abs(n))).reverse().join('')) * Math.sign(n);
}

