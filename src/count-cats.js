module.exports = function countCats(arr) {
  let res = 0;
  for(let i = 0; i < arr.length; i++){
    arr[i].forEach(element => {
      if(element === "^^") res++;
    });
  }
  return res;
};
