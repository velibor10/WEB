// 1. Random
//Create a function that builds an array of 10 random numbers between 1 and 50.
//The function prints that array out in the console and then returns it.

function createTenRandomNumbersInArray () {
    let array = [];
    for (let i = 1; i < 11; i++) {
        array.push(Math.random() * 51);
    }
    return array;
}

console.log(createTenRandomNumbersInArray());

// 2. Round
//Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
//Print out the modified array in the console.
//Use the first function for generating the input array.

function roundNumbers (array) {
    let result = [];

    // if (typeof array != "array") {
    //     throw new Error("Input must be array");
    // }

    
    array.forEach(function (number) {
        result.push(Math.round(number));
    })

    return result;
}

//roundNumbers(createTenRandomNumbersInArray());

console.log(roundNumbers(createTenRandomNumbersInArray()));

// 3. Floor
//Create a function that uses the passed array of numbers and rounds all its elements to the nearest integer.
//Print out the modified array in the console.
//Use the first function for generating the input array.

function roundNumbers (array) {
    let result = [];

    // if (typeof array != "array") {
    //     throw new Error("Input must be array");
    // }

    
    array.forEach(function (number) {
        result.push(Math.floor(number));
    })

    return result;
}

console.log(roundNumbers(createTenRandomNumbersInArray()));

/* 4. Max
Create a function that finds and prints out the biggest element in the passed
array of numbers. */


function maxElement (array) {

    return Math.max(...array);
}

console.log(maxElement(createTenRandomNumbersInArray()));

/* 5. Print out the whole date object in the console.

● Print out the current time in the console.
● Print out the current date in the console. */


let today = new Date();

function printDateAndTime (date) {
    console.log(date);
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " seconds");
    console.log(date.getDate() + ":" + (date.getMonth() + 1) + ":" + date.getFullYear() + " year");
}

printDateAndTime(today);

