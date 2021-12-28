'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * indentity: Function takes a parameter of any value and returns that value unchanged
 * @param {any value} value: Representing any input value.
 * @returns {value} input value unchanged
 */
function identity(value) {
    return value;
}

/**
 * typeOf: Function takes a parameter of any value and returns the type of value as a string.
 * @param {any value} value: Representing any input value.
 * @returns the type of value of the input value as a string.
 */
function typeOf(value) {
    if (typeof value === 'object' && value === null) {
        return "null";
    } else if (typeof value === "object" && Array.isArray(value)) {
        return "array";
    }
    return typeof value;
}

/**
 * first: Determines if an array is an array and if a number is given and is a number 
 * or greater than the length of the array.
 * @param {an array} arr: The array to be determined as an array or not.
 * @param {a number} num: The number to be determined as defined, greater than array.length, 
 * or a negative number.
 * @returns {first element of arr} if arr is an array and num is not given or not a number
 * @returns {arr} if arr is an array and num is greater than arr.length
 * @returns {a new array of the first num items of arr} if arr is an array and num is greater than 0
 * @returns {[]} if array is not an array
 */
function first(arr, num) {
    var numPresent = [];
    if(Array.isArray(arr) && num === undefined){
        return arr[0];
    } else if(Array.isArray(arr) && num > arr.length){
        return arr;
    } else if(Array.isArray(arr) && num > 0){
        for(var i = 0; i < num; i++){
           numPresent.push(arr[i]);
        }
        return numPresent;
        }
    return [];
    }

/**
 * last: Determines if an array is an array and if a number is given and is a number 
 * or greater than the length of the array.
 * @param {an array} arr: The array to be determined as an array or not.
 * @param {a number} num: The number to be determined as defined, greater than array.length, 
 * or a negative number.
 * @returns {last element of arr} if arr is an array and num is not given or not a number
 * @returns {arr} if arr is an array and num is greater than arr.length
 * @returns {a new array of the last num items of arr} if arr is an array and num is greater than 0
 * @returns {[]} if array is not an array
 */
function last(arr, num){
    var numPresent = [];
    if(Array.isArray(arr) && num === undefined){
        return arr[arr.length - 1];
    } else if(Array.isArray(arr) && num > arr.length){
        return arr;
    }else if(Array.isArray(arr) && num > 0){
        for( var i = arr.length - num; i <= num; i++){
           numPresent.push(arr[i]);
        }
        return numPresent;
        }
    return [];
}

/**
 * indexOf: Designed to iterate through an array and return the array's index depending on if a value 
 * is contained within the array.
 * @param {an array} arr: Array to be interated through
 * @param {any value} value: The value to be searched for within the array
 * @returns {index of the array} if value is found in array
 * @returns {-1} if value is not found in array
 */
function indexOf(arr, value){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}

/**
 * contains: Designed to iterate through an array and return a Boolean depending on if a value 
 * is contained within the array.
 * @param {an array} arr: Array to be interated through
 * @param {any value} value: The value to be searched for within the array
 * @returns {true} if value is found in array
 * @returns {false} if value is not found in array
 */
function contains(arr, value){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return true;
        }
    }
    return false;
}

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, func) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
}

/**
 * unique: Designed to iterate through an array and return a new array with duplicate values removed.
 * @param {an array} arr: The array to be interated through
 * @returns {new array} a new array with duplicates removed
 */
function unique(arr) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) < 0) {
            newArr.push(arr[i]);
        }
    }
  return newArr;
}

/**
 * filter:
 */



