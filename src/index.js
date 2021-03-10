function reversedNum(num) {
  return (
    num
      .toString()
      .split('')
      .reverse()
      .join('')
  ) * Math.sign(num)                 
}
