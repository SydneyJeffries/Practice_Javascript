//I created flashcards and sorted my array methods by what they do and what they return

///////// these methods return booleans: 

every();
some();
//some and every loop thro the values of an array untill the condition is met. once the condition is met it returns the related boolean value. 
// some loops untill a condtion is met as true --then stops and returns true. it will return the opposite boolean if all the values are checked
// and the condition is not met as true. 
// every loops untill a condtion is met as false -- then stops and returns false. it will return the opposite boolean if all the values are checked
// the condition is not met as false. 
includes(); 
// will return true if the provided value is found in the array. 
// it doesn't tell you how many times it's inlcuded-- it stops checking after it finds the first true instance. 
// like the above methods, it's only job is to return true or false.
// however, if it helps, you can choose a starting index position for it to start checking for that value's existance. 


//////////////// these methods proform functions on each element of the array:

map(); 
// map runs a function for each element of the array and returns a new array. 
// it's recomded to use arrow functions inside the map method to display clear intentions to other developers,
// unless the function is super long then it doesn't look as clean as some of the other ways to write a function.
forEach();
// forEach is recomended for proforming an action on the memebers of the array, because it does mutate the orignal array.
reduce();


//////////////// these methods return a string from an array: 

join()
toString()
// both these methods turn the array into a string; elements seperated by comas. 
// the join() method is the only one of the methods that turn an array into a string that you can pass a parameter in.
// with the join method's parameter you can have more controll over how the elements get sperated when turned into a string.
// by default it seperates the elements by comas, but with the parameter you pass, you can specify how the elements get seperated. 


///////////////// these methods return integers from an array:
// the integers represent the index value

lastIndexOf();
indexOf();

findIndex();
// indexOf and findIndex: these both loop and return the index value of the first match.  
// findIndex() takes a function and indexOf() does not. 


// All of these methods return -1 if the value isn't found








