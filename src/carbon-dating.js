const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(act) {
  if(typeof act !== "string") return false;
  if(/[a-zа-яё]/i.test(act)) return false;
  let activity = parseFloat(act);
  if(activity <= 0 || activity > 15){
    return false;
  }else{
    return Math.ceil((Math.log((15 / activity)) / (0.693 / 5730)));
  }
};