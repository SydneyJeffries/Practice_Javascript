///// these are notes i wrote while reading along my "Simplifing Javascript ES6" pragmatic programer book ///// 

////////// tempalate literals /////
// introduced in es6 for a replacement to concatination. this cleans up the visuals of traditonal long concatination
// because it helps the insertion of varriables, parameters, and methods of the concationation stand out with the {$ } syntax
// the example in the book was function that returns a long link 
// take aways: 
function example(){ 
    return {'{$varriable name} words words words {$varriable.method()} words words words ' }

////////// arrays ////
map(); // map ccalls a function on emap() does not change the original array.
//map() does not change the original array.
//The map() method calls the provided function once for each element in an array, in order.
// filtering
filter(); // creates a new array with elements that pass a test specified by a function 
// reduces the number of elements in a matched set to those that either match a selector or pass a test specified by a function
// parameters are selectors, functions, elements or selections
// reduce : takes the array and ruduces it to one value. 
const numbers = [1, 2, -1, 3]
const sum = numbers.reduce((accumulator, currentValue) => { return accumulator + currentValue;} 
, 0); //the first argument is the call back function of the accumulator and the 2nd value is the initilizer for the accumulator. 
// returns 5

/// arrays are awespome because they are easily iteratable and every collection concept can be easily converted to an array and back again.
// they provide hedgehod methods that operate in a predictable manner and in order -according to the item position.

/// .includes() is an array method that checks to see if a value is included in an array. This is helpful when you're dealing with.. 
// super long arrays that would take forever to look thro in console. 
// .includes() returns either true or false
// Sytnax:  array.includes(valueToFind, [fromIndex]) the optinal parameter is the index position in the array at wich to the method will.. 
// start it's search. the default of this value is 0, so it will search the entire array by default. 

///// arrays and spread operator // 
// the spread operator turns an array into a list- or a series of items that you can use in the parameters or to build an array. 
var cartArray = ["hi", "example"]
var cart = [...cartArray] // returns an error in the console because the spraed operator to be used as a value. 

.slice()
// if you're trying to cut something out of an array, you would use the .slice or splice method. 
// the author says mutations are bad and so, slice is better because it doesn't mutate the orignal array, but returns a new one to work with.
// takes two parameters: a start and ending index numbers. 

.splice() 


//you can use the spread operatior to concationate two arrays together. in the book example we sliced an array into two pieces and
//used the spread operator to combine the array back into one array. 
[...Array.slice(0, 2),...Array.slice(2 + 1 )]


// you can use spread operator to insert an array of information into a funtion's parameters. 

