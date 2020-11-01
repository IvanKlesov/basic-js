const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity) {
  let result;
  if (typeof sampleActivity !== "string") return false;

  sampleActivity = parseFloat(sampleActivity)

  if (!sampleActivity || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false

  result = Math.ceil(HALF_LIFE_PERIOD / (0.693 / Math.log(MODERN_ACTIVITY / sampleActivity)));

  return result;

};
