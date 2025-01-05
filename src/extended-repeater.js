const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (str == true) console.log('str=', str, options.addition + '', options);
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;

  options.addition = options.addition || '';

  let add = Array.from(
    { length: options.additionRepeatTimes },
    () => options.addition + ''
  ).join(options.additionSeparator);
  if (str == true)
    console.log('str=', String(str) + '', add, options.addition + '', options);
  return Array.from({ length: options.repeatTimes }, () => str + '' + add).join(
    options.separator
  );
}

module.exports = {
  repeater,
};
