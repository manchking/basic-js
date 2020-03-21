module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw Error();
    if(arr.length === 0) return arr;
    let res = [];
    let action;
    arr.map((item, index) => {
        switch(item){
            case '--discard-next':
                break;
            case '--discard-prev':
                if(res[index-1]) res.splice(1, index-1);
                break;
            case '--double-next':
                if(arr[index+1]) res.push(arr[index+1]);
                break;
            case '--double-prev':
                if(res[index-1]) res.push(arr[index-1]);
                break;
            default: if(arr[index-1] === '--discard-next'){
                break;
            }else{
                res.push(item);
            }
        }
    })
    return res;
}