const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (names.length < 1) return [];
  let newNames = [names[0]];
  function namesBefore(arr) {
    return arr.reduce((acc, el, arr) => {
      if (acc.hasOwnProperty(el)) {
        acc[el] += 1;
      } else {
        acc[el] = 1;
      }
      return acc;
    }, {});
  }
  for (let i = 1; i < names.length; i++) {
    let num = namesBefore(names.slice(0, i))[`${names[i]}`];
    let num1 = namesBefore(newNames.slice(0, i))[`${names[i]}`];
    if (num) {
      newNames[i] = names[i] + `(${num})`;
    } else {
      newNames[i] = num1 ? names[i] + `(${num1})` : names[i];
    }
  }
  return newNames;
}

module.exports = {
  renameFiles,
};
