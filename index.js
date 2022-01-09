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
module.exports.identity = identity;

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
module.exports.typeOf = typeOf;

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
module.exports.first = first;

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
module.exports.last = last;

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
module.exports.indexOf = indexOf;

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
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * func Function to each value in the collection.
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
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
module.exports.each = each;

/**
 * unique: Designed to iterate through an array and return a new array with 
 * duplicate values removed.
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
module.exports.unique = unique;

/**
 * filter: Designed to interate through an array and apply a function to each 
 * element in the array, returning a new array of elements for which the called 
 * function returned true.
 * @param {an array} arr: The array to be iterated through
 * @param {a function} func: Function to be applied to each element of the array
 * @returns {new array} a new array of elements for which calling the function returned true
 */
function filter(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
module.exports.filter = filter;

/**
 * reject: Designed to interate through an array and apply a function to each 
 * element in the array, returning a new array of elements for which the called 
 * function returned false.
 * @param {an array} arr: The array to be iterated through
 * @param {a function} func: Function to be applied to each element of the array
 * @returns {new array} a new array of elements for which calling the function returned false
 */
function reject(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === false) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
module.exports.reject = reject;

/**
 * partition: Designed to interate through an array and apply a function to each 
 * element in the array, returning a new array of sub arrays of elements for which the called 
 * function returned true or false.
 * @param {an array} arr: The array to be iterated through
 * @param {a function} func: Function to be applied to each element of the array
 * @returns {new array of sub arrays} a new array of sub arrays of elements for which calling the function returned true or false
 */
function partition(arr, func) {
    let newArr = [[], []];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === true) {
            newArr[0].push(arr[i]);
        } else if (func(arr[i], i, arr) === false) {
            newArr[1].push(arr[i]);
        }
    }
    return newArr;
}
module.exports.partition = partition;

/**
 * map: Designed to loop over a collection, Array or Object, and applies the 
 * func Function to each value in the collection. It returns a new array containing 
 * the returned values of the func Function called on each element of collection.
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The function to be applied to each value in the collection.
 * @returns {a new array} a new array of the returned values of the func function called on each element of collection.
 */
function map(collection, func) {
    var outputArr = [];
if(Array.isArray(collection)){
for(var i = 0; i < collection.length; i++){
    var result = func(collection[i], i, collection); 
    outputArr.push(result);
}
} else {
for (var key in collection) {
    var result = func(collection[key], key, collection);
    outputArr.push(result);
}
}
return outputArr;
}
module.exports.map = map;

/**
 * pluck: Designed to use the .map function on an array and return a new array with every element
 * being the value of a property input.
 * @param {Array of objects} array: array to have the .map function acted upon
 * @param {Property} prop: the value to be returned for each element of the new array
 * @returns {a new array} a new array containing the value of the property input for each element
 */
 function pluck(array, prop){
    let arr = [];
      array.map(function(array){
          for (var key in array){
              if(key === prop){
                  arr.push(array[key]);
              }
          }
      })
    return arr;
}
module.exports.pluck = pluck;

/**
 * every: Designed to loop over a collection, Array or Object, and applies the func Function to 
 * each value in the collection. It returns a boolean value depending on if the func function applied
 * to the collection returns true or false. If the return value of calling func for every element is true, return true.
 * If even one of them returns false, return false
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The function to be applied to each value in the collection.
 * @returns {Boolean} true or false.
 */
 function every(collection, func) {
    if (func) {
        if (Array.isArray(collection)) {
            for (let i = 0;i < collection.length; i++) {
                func(collection[i], i, collection);
                if (func(collection[i], i, collection) === false) {
                    return false;
                }
            }
            return true;
        } else {
            for (var key in collection) {
                func(collection[key], key, collection);
                if (func(collection[key], key, collection) === false) {
                    return false;
                } 
            }
            return true;
        }
    } else {
        if (Array.isArray(collection)) {
            for (let i = 0;i < collection.length; i++) {
                if (collection[i] === false) {
                    return false;
                }
            }
            return true;
        } else {
            for (var key in collection) {
                if (collection[key] === false) {
                    return false;
                } 
            }
            return true;
        }
    }
}

module.exports.every = every;

/**
 * some: Designed to loop over a collection, Array or Object, and applies the func Function to 
 * each value in the collection. It returns a boolean value depending on if the func function applied
 * to the collection returns true or false. If the return value of calling func is true for at least one element, return true. 
 * If it is false for all elements, return false
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The function to be applied to each value in the collection.
 * @returns {Boolean} true or false.
 */
 function some(collection, func) {
    if (func) {
        if (Array.isArray(collection)) {
            for (let i = 0;i < collection.length; i++) {
                func(collection[i], i, collection);
                if (func(collection[i], i, collection) === true) {
                    return true;
                }
            }
            return false;
        } else {
            for (var key in collection) {
                func(collection[key], key, collection);
                if (func(collection[key], key, collection) === true) {
                    return true;
                } 
            }
            return false;
        }
    } else {
        if (Array.isArray(collection)) {
            for (let i = 0;i < collection.length; i++) {
                if (collection[i] === true) {
                    return true;
                }
            }
            return false;
        } else {
            for (var key in collection) {
                if (collection[key] === true) {
                    return true;
                } 
            }
            return false;
        }
    }
}

module.exports.some = some;

/**
 * reduce: Designed to call a function on every element of an array, passing the return value of that function call 
 * on the preceeding element. The final return value is a single value of all the function calls within.
 * @param {Array} array: The arary to be iterated through and to have the function called on each of its elements.
 * @param {Function} func: The function to be called on each element in the array.
 * @param {Seed Value} seed: The starting value before the function is called.
 * @returns {Seed Value} returns the final value of seed after the function has been called on every element.
 */
 function reduce(array, func, seed) {
    if (seed === undefined) {
        seed = array[0];
        for (let i = 1; i < array.length; i++) {
            seed = func(seed, array[i], i);
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            seed = func(seed, array[i], i);
        }
    }
    return seed;
}

module.exports.reduce = reduce;

/**
 * extend: Designed to copy properties from one object to another and return the first object updated. Can take in 
 * as many objects as necessary.
 * @param {An Object} object1: The first object to be updated and returned.
 * @param {An Object, maybe more} object2: The second object that will have its properties copied the the first object.
 * @returns {An Object} object1 after being updated with the copied properties.
 */
 function extend(...args) {
    return args.reduce(function(object1, object2){
        Object.assign(object1, object2);
        return object1;
    });
}

module.exports.extend = extend;

