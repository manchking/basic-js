module.exports = function createDreamTeam(names) {
  if(!Array.isArray(names)) return false;
  let words = [];
  names.forEach(el => {
    if(typeof el === "string"){
      let name = el.toString().replace(/\s+/g, '');
      words.push(name[0].toUpperCase());
    }
  });
  return words.sort().join('').toString();
};