const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const seasons = ['spring', 'summer', 'autumn', 'winter'];
  console.log(date);
  if (date == null || date == undefined) {
    return 'Unable to determine the time of year!';
  }
  if (isNaN(date) || typeof date.getMonth !== 'function')
    throw new Error('Invalid date!');
  if (!date instanceof Date) throw new Error('Invalid date!');
  if (date.getMonth() >= 2 && date.getMonth() <= 4) {
    return seasons[0];
  }
  if (date.getMonth() >= 5 && date.getMonth() <= 7) {
    return seasons[1];
  }
  if (date.getMonth() >= 8 && date.getMonth() <= 10) {
    return seasons[2];
  }
  if (date.getMonth() == 11 || date.getMonth() == 0 || date.getMonth() == 1) {
    return seasons[3];
  }
  if (date == null) {
    return 'Unable to determine the time of year!';
  }
}

module.exports = {
  getSeason,
};
