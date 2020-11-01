const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';

  if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
    return 'TESTstrADD!';
  }

  options = {
   repeatTimes: options.repeatTimes || 0,
   separator: options.separator || '+',
   addition: options.addition + "" || "",
   additionRepeatTimes: options.additionRepeatTimes || 0,
   additionSeparator: options.additionSeparator || '|',
 }

 for (let i = 0; i < options.repeatTimes; i++) {
   result += str;
   for (let j = 0; j < options.additionRepeatTimes; j++) {
     result += options.addition;
     if ( j !== options.additionRepeatTimes - 1) result += options.additionSeparator;
   }
   if ( i !== options.repeatTimes - 1) result += options.separator;
 }

 return result;
};
