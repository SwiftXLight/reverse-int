function reverse(x) {
  if (x < 0) return -reverse(-x); // reverse(-123) === -reverse(123)
  var str = x.toString(); // "123"
  var strArray = str.split(""); // [ "1", "2", "3" ]
  var revArray = strArray.reverse(); // [ "3", "2", "1" ]
  var rev = revArray.join(""); // "321"
  return Number(rev);
}
