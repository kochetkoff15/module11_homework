function isPrime(num) {
    if (!Number.isInteger(num) || num < 2 || num > 1000) return "данные неверны";

    let j = Math.sqrt(num);
    for (let i = 2; i <= j; i++)
        if (num % i === 0) return "составное число";

    return "простое число";
}

console.log(isPrime(49));
console.log(isPrime(997));
console.log(isPrime(1065));