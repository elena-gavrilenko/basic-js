const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str = String(n);
  let arrNew = [];
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      arrNew.push(+str.slice(1, str.length));
    } else if (i == str.length - 1) {
      arrNew.push(+str.slice(0, str.length - 1));
    } else {
      arrNew.push(Number(str.slice(0, i) + str.slice(i + 1, str.length)));
    }
  }
  return arrNew.reduce((sum, curr) => (sum > curr ? sum : curr));
}

module.exports = {
  deleteDigit,
};
