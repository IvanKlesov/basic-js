const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  };

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === `--discard-next` ) {
        continue;
    } else if (arr[i] === `--discard-prev`
            && arr[i - 2] !== `--discard-next`) {
              result.pop();
    } else if (arr[i - 1] === `--double-next`) {
              result.push(arr[i], arr[i]);
    } else if (arr[i] === `--double-prev`
            && arr[i - 2] !== `--discard-next`) {
             i == 0 ? 0 : result.push(arr[i - 1]);
    } else if (arr[i] !== `--double-next`
            && arr[i] !== '--discard-next'
            && arr[i] !== `--double-prev`
            && arr[i] !== `--discard-prev`) {
              result.push(arr[i]);
    }

}
return result;
};
