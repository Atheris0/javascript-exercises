const palindromes = function (word) {

    const cleaner = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
    const reverser = cleaner.split('').reverse().join('');
  
    return cleaner === reverser;
};

// Do not edit below this line
module.exports = palindromes;
