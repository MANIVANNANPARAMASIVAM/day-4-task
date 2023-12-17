//! 1.Do the below programs in anonymous function & IIFE
//a.Print odd numbers in an array

//?anonymous function
var arr =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var result =[];
function odd (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(odd(arr));

//?IIFE function

var arr1 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var result =[];
(function (arr1) {
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 !== 0) {
            result.push(arr1[i]);
        }
    }
    console.log (result)
})((arr1));


//b.Convert all the strings to title caps in a string array

//anonymous function
let strings = ["hello", "world", "example", "title"];
let convertToTitleCase = function(arr) {
    let titleCaseArray = arr.map(function(str) {
        return str.toUpperCase() 
    });
    return titleCaseArray;
};

let titleCaseStrings = convertToTitleCase(strings);
console.log(titleCaseStrings);

// Using IIFE
const stringArray = ["hello", "world", "example", "title"];
const titleCaseArray = (function(arr) {
    return arr.map(function(str) {
        return str.toUpperCase();
    });
})(stringArray);

console.log(titleCaseArray);

// c.Sum of all numbers in an array
//anonymous function
const numArray = [1, 2, 3, 4, 5];
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const totalSum = sumArray(numArray);
console.log(totalSum);


// Using IIFE
const numArray1 = [1, 2, 3, 4, 5];

const sum = (function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
})(numArray1);

console.log(sum);


//d. Return all the prime numbers in an array
//anonymous function
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    });
}(numArr);

console.log(primeNumbers);

// Using IIFE
const numArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers1 = (function(arr) {
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    return primes;
})(numArray);

console.log(primeNumbers1);


// e.Return all the palindromes in an array
//anonymous function
const wordArray = ["hello", "level", "world", "madam", "racecar"];
const palindromes = function(arr) {
    return arr.filter(function(word) {
        const reversedWord = word.split('').reverse().join('');
        return word === reversedWord;
    });
}(wordArray);

console.log(palindromes);

// Using IIFE
const wordArr = ["hello", "level", "world", "madam", "racecar"];

const palindrome = (function(arr) {
    function isPalindrome(word) {
        const reversedWord = word.split('').reverse().join('');
        return word === reversedWord;
    }

    const palindromeWords = arr.filter(function(word) {
        return isPalindrome(word);
    });

    return palindromeWords;
})(wordArr);
console.log(palindrome);


//f. Return median of two sorted arrays of the same size.
//anonymous function
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
const medianOfSortedArrays = function(arr1, arr2) {
    const mergedArray = array1.concat(array2).sort((a, b) => a - b);
    const length = mergedArray.length;
    const middle = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
    } else {
        return mergedArray[middle];
    }
}(array1, array2);
console.log(medianOfSortedArrays);


// g.Remove duplicates from an array
//anonymous function
const arrayWithDuplicate = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const uniqueArray = function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
}(arrayWithDuplicate);
console.log(uniqueArray);

// Using IIFE
const DuplicateArray = [1, 2, 2, 3, 4, 4, 5, 5];
const uniqueArray1 = (function(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
})(DuplicateArray);
console.log(uniqueArray1); 


// h.Rotate an array by k times
//anonymous function
const arrayToRotate = [1, 2, 3, 4, 5];
const k = 3;
const rotatedArray = function(arr, k) {
const len = arr.length;
const rotations = k % len;
const rotated = arr.slice(rotations).concat(arr.slice(0, rotations));
    return rotated;
}(arrayToRotate, k);

console.log(rotatedArray);

//2 Do the below programs in arrow functions.
//a Print odd numbers in an array

let result3=[];
let odd2= (rra)=>{
    for(var i=0;i<rra.length;i=i+1){
        if(rra[i]%2!==0){
            result3.push(rra[i]);
        }
      }
      return result3;
    }
   console.log(odd2([15,18,23,14,17,24]));

//b Convert all the strings to title caps in a string array
let stringArray1 = ["this is a string", "another example", "one more string"];
let titleCaps = (arr) => arr.map((str) =>
  str.split(' ').map((word) =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
);
let result1 = titleCaps(stringArray1);
console.log(result1);


//c Sum of all numbers in an array
let sum4=0;
let result4= (rra1)=>{
    for(let i=0; i<rra1.length; i++){
        sum4 += rra1[i]
    }
    return sum4;  
}
console.log(result4([2,2,2,2,2]))

//d Return all the prime numbers in an array
let prime1 = (arr5) => arr5.filter(number => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
});

console.log(prime1([2, 3, 4, 5, 6, 7, 25,29]));

//e return all the palindrom in an array
let palindrom1 = function (arr7) {
    return arr7.filter(word => {
        let reverse = word.split("").reverse().join("");
        return word === reverse;
    });
};
console.log(palindrom1(["hello", "level", "world", "madam", "racecar"]));
