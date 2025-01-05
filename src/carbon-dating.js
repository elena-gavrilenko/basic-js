const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * givenc
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (
    typeof sampleActivity !== 'string' ||
    Number(sampleActivity) <= 0 ||
    isNaN(+sampleActivity) ||
    +sampleActivity > 15
  )
    return false;
  return Math.ceil((5730 * Math.log(15 / +sampleActivity)) / 0.693);
}

module.exports = {
  dateSample,
};
