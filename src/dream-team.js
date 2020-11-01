const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];
  let char = '';
  if (!Array.isArray(members)) return false; 
  for (let i = 0; i < members.length; i++){
    if (typeof members[i] === 'string') {
      let chars =  members[i].replace(/\s+/g, '');
      char = chars.charAt(0);
      result.push(char.toUpperCase());
  };
};
  result.sort();
  let total = result.join('');
  return total;
};
