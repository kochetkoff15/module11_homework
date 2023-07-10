function Sum (x) {
    return function (y) {
        return x + y;
    }
}

console.log(Sum(3)(5) , Sum(7)(8));