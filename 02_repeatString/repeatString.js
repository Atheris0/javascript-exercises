const repeatString = function(word, num) {
    let result = "";
    if (num < 0) {
        return 'ERROR';
    }
    while(num > 0){
        result += word;
        num--;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
