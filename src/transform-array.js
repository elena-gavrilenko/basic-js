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
    // return "'arr' parameter must be an instance of the Array!";
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (
    !arr.includes('--double-next') &&
    !arr.includes('--double-prev') &&
    !arr.includes('--discard-prev') &&
    !arr.includes('--discard-next')
  )
    return arr;
  let arrNew = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      arrNew.push(arr[i]);
    }
    if (arr[i - 1] == '--double-next') {
      arrNew.push(arr[i]);
    }
    if (arr[i] == '--double-prev') {
      arr[i - 1] !== undefined ? arrNew.push(arr[i - 1]) : i;
    }
    if (arr[i] == '--discard-prev') {
      arrNew.splice(i - 1, 1);
    }
    if (arr[i] == '--discard-next') {
      i = i + 2;
    }
  }
  return arrNew;
}

module.exports = {
  transform,
};
