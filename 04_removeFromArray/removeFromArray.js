const removeFromArray = function(arr, ...args) {

  for (let i = arr.length -1; i >= 0; i--){

    if (args.includes(arr[i])) {
      arr.splice(i, 1); // 2nd parameter means remove one item only
      }
  }
  
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
