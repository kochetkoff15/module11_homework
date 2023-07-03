let arr = [null, 0 , 654, -23, 546, 32432, 435, 123];
let number_of_digits = 0;
let number_of_zeros = 0;
let evencount = 0;
let oddcount = 0;
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
console.log(`В массиве: ${number_of_digits} цифр, ${number_of_zeros} нулей, ${evencount} чётных, ${oddcount} нечётных!`);