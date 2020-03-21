module.exports = function getSeason(date) {
  if(typeof date === "undefined") return 'Unable to determine the time of year!';
  try{
    date.getTimezoneOffset();
  }
  catch{
    throw new Error();
  }
  let month = date.getMonth();
  let season;
  if(month == 11 || month == 0 || month == 1) {season = "winter";};
  if(month >= 2 && month <= 4) {season = "spring";};
  if(month >= 5 && month <= 7) {season = "summer";};
  if(month >= 8 && month <= 10) {season = "autumn";};
  return season;
};
