function isPalindrome(str) {
    var lowerStr = str.toLowerCase();
    
    var reversedStr = '';

    
    for (var i = lowerStr.length - 1; i >= 0; i--) {
        reversedStr += lowerStr[i]; 
    }

    if (lowerStr === reversedStr) {
        return true; 
    } else {
        return false; 
    }
}

console.log(isPalindrome("шалаш")); 
console.log(isPalindrome("Анна")); 
console.log(isPalindrome("А роза упала на лапу Азора")); 
