const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrNew = [];
  if (members == null) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      for (let j = 0; j < members[i].length; j++) {
        console.log(members[i][j]);
        if (members[i][j] == " ") {
          continue;
        } else {
          arrNew.push(members[i][j].toUpperCase());
          break;
        }
      }
    }
  }
  if (arrNew.length == 0) {
    return false;
  } else {
    console.log(arrNew);
    return arrNew.sort().join("");
  }
}

module.exports = {
  createDreamTeam,
};
