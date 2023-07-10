let arrN = [null, 0 , 654, -23, 546, 32432, 435, 123];


function countEvenOdd (arr){
    let evencount = 0;
    let oddcount = 0;
    let number_of_digits = 0;
    let number_of_zeros = 0;

    for (let k = 0; k < arr.length; k++) {
    if (typeof arr[k] === "number" || !isNaN(arr[k])) {
        number_of_digits += 1;
        if (arr[k] === 0) {
            number_of_zeros += 1;
        } else if (arr[k] % 2 === 0) {
            evencount += 1;
        } else {
            oddcount += 1;
        }
    }
    }
    return [number_of_digits, evencount, oddcount,,number_of_zeros];
}

let rez = countEvenOdd(arrN);

console.log("В массиве цифр " + rez[0]);
console.log("Четных - " + rez[1]);
console.log("Нечетных - " + rez[2]);
console.log("Нулей - " + rez[3]);