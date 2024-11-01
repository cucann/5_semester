function factorial(n) {
    
    if (n < 0) {
        return "Факториал не определен для отрицательных чисел";
    }
    
    if (n === 0) {
        return 1;
    }
    let result = 1;
    
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); 
console.log(factorial(0)); 
console.log(factorial(-3)); 
