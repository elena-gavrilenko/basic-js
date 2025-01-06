const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let filterArr = arr.filter((x) => x !== -1).sort((a, b) => a - b);
  let newArr = [];
  let indexes = arr.reduce((acc, el, i) => {
    el == -1 ? acc.push(i) : acc;
    return acc;
  }, []);

  for (let i = 0; i < arr.length; i++) {
    if (indexes.includes(i)) {
      newArr.push(-1);
    } else {
      newArr.push(filterArr.shift());
    }
  }
  return newArr;
}

module.exports = {
  sortByHeight,
};
