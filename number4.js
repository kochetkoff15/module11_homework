function  getRandomRange(min, max) {
    return Math.floor(Math.random() * (max-min));
}
console.log(getRandomRange(0, 100));