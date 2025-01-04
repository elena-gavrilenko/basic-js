const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let reg = [
    new RegExp(/(?:\.)+([a-z]+)$/),
    new RegExp(/(?:\.)*([a-z]+\.[a-z]+)$/),
    new RegExp(/(?:\.)*([a-z]+\.[a-z]+\.[a-z]+)$/),
  ];
  function reverse(str) {
    return '.' + str.split('.').reverse().join('.');
  }
  return domains.reduce((acc, el, arr) => {
    for (let i = 0; i < reg.length; i++) {
      if (el.match(reg[i]) !== null) {
        if (acc.hasOwnProperty(reverse(el.match(reg[i])[1]))) {
          console.log(reverse(el.match(reg[i])[1]));
          acc[reverse(el.match(reg[i])[1])] += 1;
        } else {
          acc[reverse(el.match(reg[i])[1])] = 1;
        }
      }
    }
    return acc;
  }, {});
}

module.exports = {
  getDNSStats,
};
