const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    return "'arr' parameter must be an instance of the Array!";
  }
  let arrNew = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      arrNew.push(arr[i]);
    }
    if (arr[i - 1] == '--double-next') {
      arrNew.push(arr[i]);
    }
    if (arr[i] == '--double-prev') {
      arrNew.push(arr[i - 1]);
    }
    if (arr[i] == '--discard-prev') {
      arrNew.splice(i - 1, 1);
    }
    if (arr[i] == '--discard-next') {
      arrNew.splice(i + 1, 1);
    }
  }
  console.log('arr=', arr, 'arrNew=', arrNew);
  return arrNew;
}

module.exports = {
  transform,
};
