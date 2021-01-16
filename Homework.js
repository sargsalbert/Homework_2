//Given an array of numbers. Find the index of the second maximum element.
//Task 2
const secondMaxIndex = (arr) => {
    let biggest = -Infinity;
    let secondBiggest = -Infinity;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > biggest) {
            secondBiggest = biggest;
            biggest = arr[i];
        } else if (arr[i] > secondBiggest && arr[i] != biggest)
            secondBiggest = arr[i];
    }
    return arr.indexOf(secondBiggest)
}

console.log(secondMaxIndex([23, -98, 0, -456, 12, 8]));
console.log(secondMaxIndex([-60, 2, 43, -18, 5, -19, 36, 7, 56 ]))
//End Task 2



//Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are larger than the given number.
//Task 4
const largerGivenNumber = (array, num) =>{

    let largeNum = array.filter(arr => arr > num);

    return largeNum.length > 0 ? largeNum : "Such values do not exist."
}

console.log(largerGivenNumber([10, 25, 16, -5, 30, 15, 24], 16));
console.log(largerGivenNumber([1, 1, 2, -3, 0, 8, 4, 0], 9));
//End Task 4



//Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.
//Task 5
const foo = (n1, n2) =>{

    let arr = [];

    for (let j = n1; j <= n2; j++){
        if (j % 2 === 0 && numEvenDigit(j)) {
            arr.push(numEvenDigit(j))
        }
    }

    return arr.length > 0 ? arr.join(", ") : 'Such numbers does not exist.'
}

const numEvenDigit = (num) => {
    num = num + '';
    let state;

    for (let i = 0; i < num.length; i++){
        if (num[i] % 2 === 0){
            state = num
        }else{
            return false
        }
    }
    return state
}

console.log(foo(19, 42));
console.log(foo(99, 199));
//End Task 5



