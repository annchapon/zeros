module.exports = function getZerosCount(number) {
  let zeros = 0;
  let i = 5;
  while (number/i >= 1) {
    zeros = zeros + Math.floor(number/i);
    i = i*5;
  }
  return zeros;
}
