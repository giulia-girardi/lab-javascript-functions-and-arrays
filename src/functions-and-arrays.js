// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if (number1 >= number2) {
    return number1
  } else {
    if (number2 >= number1) {
      return number2
    }
  }
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator000000000', 'crocodile', 'pearl', 'orchard', 'crackpothhhhhh'];
function findLongestWord(arrayOfWords) { 
  if (arrayOfWords.length === 0) {
    return null
  } else if (arrayOfWords.length === 1) {
      return arrayOfWords[0]
    } else {
      let longestword = arrayOfWords[0];
      for (let index = 1; index < arrayOfWords.length; index += 1) {
        if (arrayOfWords[index].length > longestword.length) {
          longestword = arrayOfWords[index];
        }
      }
      return longestword;
    }
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0 ) {
    return 0 
  } else {
    let sumTotal = arrayOfNumbers[0];
    for (let index = 1; index < arrayOfNumbers.length; index += 1) {
      sumTotal += arrayOfNumbers[index] 
    }
    return sumTotal
  }
}

//console.log(sumNumbers(numbers))




// Iteration #3.2 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(arrayOfAny) {
  if (arrayOfAny.length === 0) {
    return 0 
  } else {
    let sumTotal = 0;
    for (let index = 0; index < arrayOfAny.length; index += 1) {
      if (typeof arrayOfAny[index] === "boolean") {
        Number(arrayOfAny[index])
        //console.log(arrayOfAny[index])
        sumTotal += arrayOfAny[index]
      } else if (typeof arrayOfAny[index] === "string"){
        sumTotal += arrayOfAny[index].length
      } else if (typeof arrayOfAny[index] === "number") {
        sumTotal += arrayOfAny[index]
      }
      //console.log(arrayOfAny[index])
    }
    return sumTotal 
  }
}

console.log(sum(mixedArr))
  
  




// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
let average;
function averageNumbers(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) {
    return null;
  } else {
    average = sumNumbers(arrayOfNumbers) / arrayOfNumbers.length
    return average;
  }
}
//console.log(averageNumbers(numbersAvg))


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arrayOfWords) { 
  if (arrayOfWords.length === 0) {
    return null
  } else {
    //let averageString;
    let sumStrings = 0;
    for (let index = 0; index < arrayOfWords.length; index += 1) {
      sumStrings += arrayOfWords[index].length
      console.log(sumStrings)
    }
    console.log(arrayOfWords.length)
    return sumStrings / arrayOfWords.length;
 }
}
//console.log(averageWordLength(wordsArr))

// Bonus - Iteration #4.3
const mixedArr2 = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(mixedArray) {
  if (mixedArray.length === 0) {
    return null
  } else {
    let sum = 0;
    for (let index = 0; index < mixedArray.length; index += 1) {
      if (typeof mixedArray[index] === "boolean") {
        Number(mixedArray[index])
        //console.log(arrayOfAny[index])
        sum += mixedArray[index]
      } else if (typeof mixedArray[index] === "string"){
        sum += mixedArray[index].length
      } else if (typeof mixedArray[index] === "number") {
        sum += mixedArray[index]
      } else if (typeof mixedArray[index] === "object") {
        throw new Error("Unsupported data type sir or ma'am")
      } else if (typeof mixedArray[index] === "array") {
        throw new Error("Unsupported data type sir or ma'am")
      }
      //console.log(mixedArray[index])
    }
    return sum / mixedArray.length;
  }
}

console.log(avg(mixedArr2))

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arrayOfWords) {
  if (arrayOfWords.length === 0) {
    return null
  } else {
    let newArray = [];
    for (let index = 0; index < arrayOfWords.length; index += 1) {
      if (newArray.includes(arrayOfWords[index])) {
        continue
      } else {
        newArray.push(arrayOfWords[index])
      }
    } 
    return newArray

  }
}

//console.log(uniquifyArray(wordsUnique))

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arrayOfWords, wordToSearch) {
  if (arrayOfWords.length === 0) {
    return null
  } 
  for (let index = 0; index < arrayOfWords.length; index += 1) {
    if (arrayOfWords.includes(wordToSearch)) {
      return true
    } else {
      return false
    }
  }
}
//console.log(doesWordExist(wordsFind, "trouble"))


// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arrayOfWords, wordToSearch) {
  if (arrayOfWords.length === 0) {
    return 0
  } 
  let wordCount = 0;
  for (let index = 0; index < arrayOfWords.length; index += 1) {
    if (arrayOfWords[index] === wordToSearch) {
      wordCount += 1;
    } else {
      wordCount += 0
    }
  }
  return wordCount
}

//console.log(howManyTimes(wordsCount, "matter"))



// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

let matrixTest = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

function greatestProduct(anyMatrix) {
  let product = 0;
  let maxProduct = 0;
  let maxHorVer = 0;
  for (let index = 0; index < anyMatrix.length - 3; index += 1) {
    for (let j = 0; j < anyMatrix[index].length - 3; j += 1) {
    product = (anyMatrix[index][j]) * (anyMatrix[index][j + 1]) * (anyMatrix[index][j + 2])* (anyMatrix[index][j + 3])
    productVert = (anyMatrix[index][j]) * (anyMatrix[index + 1][j]) * (anyMatrix[index + 2][j])* (anyMatrix[index + 3][j])
    productDiag = (anyMatrix[index][j]) * (anyMatrix[index + 1][j + 1]) * (anyMatrix[index + 2][j + 2])* (anyMatrix[index + 3][j + 3])
    maxHorVer = Math.max(product, productVert, productDiag)
    if (maxHorVer > maxProduct) {
      maxProduct = maxHorVer;
    }
    } 
  }
  return maxProduct
}
console.log(greatestProduct(matrixTest))



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
