function sumToN(n) {
    var sum = 0; 

    if (n < 1) {
        return "Введите положительное число"; 
    }

    for (var i = 1; i <= n; i++) {
        sum += i; 
    }

    return sum; 
}

console.log(sumToN(5)); 
console.log(sumToN(10)); 
console.log(sumToN(-5)); 
