const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Введите номер строки треугольника Паскаля: ", (input) => {
    const n = parseInt(input);

    function pascal(n) {
        let row = [1];
    
        for (let i = 1; i <= n; i++) {
            row[i] = row[i - 1] * (n - i + 1) / i;
        }
    
        return row;
    }

    if (n >= 0) {
        console.log(pascal(n));
    } else {
        console.log("Введите положительное число.");
    }

    readline.close();
});

