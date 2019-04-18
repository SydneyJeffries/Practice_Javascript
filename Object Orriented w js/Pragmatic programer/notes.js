

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

/////////////    Maps   ////////// pg 55-68
// use objects for static- unchaning data : recommended 
// maps are like objects b/c key value pair, but used instead of objects when:
//  -key-value pairs are frequently added or removed,
// - when a key isnt a string,
// - when the data needs to be iterated over.  
//maps are better then objects because the smantics of the map methods clearly communicate what's happening to the map. 
// .delete(), .clear() , .set() .entries(),  
// maps are better then objects because they are by default iteratable and objects are not unless you do a large work around to set
// them as iteratable.  iteratable meaning you can use them in the for...of loop.(.entries() converts the map into an iteratable object)


//// creating a map: 

let filters = new Map();  // always has to be initalized in this way
filters.set('breed', 'lab') // 1st parameter is the key, 2nd parameter is the value
.set('size', 'large')
.set('color', 'chocolate');

 filters.get('size') //large
 .get('color')  // chocolate
 


 //turning a map into an array of pairs using the spread operator: 
 let arrayMap = [...filters]
 // [ ['color', 'black'] , ['breed, 'labrator'] ]
//once it's in an array of pairs you can easily iterate over the array version and you can even use array methods on the map. 

 
 /////////   maps    /////
////// creating copries of new maps 
// to create a copy of a map, and otherwise avoid mutations to the orginal, use the spread operator into an array. 

let copy  = [...map];




 ////////// for... of and for...in loops////

// in for.. in loops it matters that the properties are set to have enumerable attribute: true
// for... in loops it iterates over the key

// for... of loops it matters that the properties are set to itterable 
//for... of loops iterate over the value
 let iterable = [3, 5, 7];


for (let i in iterable) {
    console.log(i); // logs 0, 1, 2, 
  }
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}


////////////  sets     ////////
// sets are anther collection type (collection type: like objects and maps)
// it does one thing very well : creating a list of unique items
// set is like an array (in that it only has value) but, sets can ONLY contain ONE INSTANCE OF EACH ITEM.

// if your starting with an array and you want to get the unique values from an array then the solution using a set is really simple:

const colors = ['black', 'black', 'chocolate'];
const unique = new Set(colors); //returns  set { 'black', 'chocolate' }

// inorder to make a set into an array use the spread operator:
const colors = ['black', 'black', 'chocolate'];
let setArray = [...new Set(colors)]; // returns [ 'black', 'chocolate' ];


//if you're using a set to get unique values from an array made of objects you'll need to create a for...of loop:
funtion getUniqueColors(dogs) {
    const unique = new Set();
    for (const dog of dogs) {
        unique.add(dog.color)
    }
    return [...unique];
}
// ^^this works because it won't add anything it already has a uinque value of. 
//it will just ignoore and duplicate and move onto the the next phase of the loop.

//// sets have built in methods that are the same as the built in methods for a map:
// .add() , .delete() , clear()
let names = new Set();
names.add('joe');
names.add('sydney')
names.delete('joe');
names.clear();  //erases the entire set. 


// sets will ignoore instead of update anytime you try to add a value that already exists in the set. 


///
/////////////////////////// Chapter 4: write clear conditionals //////////
// we will review truthy/falsey, ternaries , and short circuiting to create more clear concise conditionals. 
// 
// review:
// equivalent vrs identical values
// 1 == "1" is true because the values are equivalent
 // equivalent is when it's the same but the types maybe different. will only be seen in == and not strictly equal. 
// 1 === 1 is true because the values are identical 

// falsy values
// flase, null, 0, NaN , '' , "" 

// when youre using the existance of a value to be the checker in the if statement , becareful because the key could 
//exist but be equal to a falsy value. 
// checking if a value is there using the truthy and falsey trick  is all good, but what if the value is equal to something falsey like
// bellow

const employee = {
    name: 'eric',
    equiptmentTraining: "",
}

if (!employee.equiptmentTraining) {
    return 'not authorized to operate machinery'
}

/// reads if (!false) because the equiptment training is set to a falsy value.
// the author says that truthy and falsy are great for keeping clean conditionals and the work around 
// in order to keep using truthy and fasly, would be to never let your object values be set to an empty string or zero. 
// because they can create falsy situations.


// using the stricter applier in your conditional statements
const employee = {
    name: 'eric',
    equiptmentTraining: true,
}

if (employee.equiptmentTrainingTraining !== true ) {
    return 'not authoerized to operate machinery'
}


/////////// ternary operator /////
/// ? is the ternary "operator" 
// ternaries create quick if/then checks.
//
if(true) {
    var display = 'bold'
}
else {
    var display = 'normal'
}

const display = true ? 'bold' : 'normal';
// here ternary operator cleaned up this if else statement that assigns a value to a varriable.
// and it allowed us to assign a to const because it's no longer being assinged in block scope like above
// if we used const in the above application, we wouldn't be able to access the value of display from global. 


/////// Short Circuiting  evaluations//////
// short circuiting evaluations cleans up if statements. 
// you can make shorter alot of code with short circuiting routines. 
// our short circuiting techniques rely on truthy and valsey values so be sure that your data that we are checking
// for existance isnt set to an "" or a 0.
// in JS your short Circuiting operators are && and ||. 
// || is t he logical OR. the logical or will return true on one of the values.
// the book considered the final value in the || short circut to be the default value. - it will return if nothing else in the front of the
// expression does..
// when a value in a || returns true it also returns the truthy value.

const name = "sydney" || "i have no name" 
name // returns "sydney"



function getIconPath(icon) {
    const path = icon.path || 'uploads.png'
    return 'htttp://assets/"${path}';
}


/////// short circuiting with the && operator ///// 
// && is the and operator. everyhthing in the expression with the and operator has to be true inorder for the following code to execute
//the book used the && operator to make smaller code of conditonal statements that looked like this: 

if( asdfasdf){
    if(sadfasdf) {
        //some code
    }
}
///the book made the same statement as above using the && short circuit evaluations:
    if (asdfasdf && asdfasd){
 
    }


///////////// Let Var and Const /////////
// variable declaration vrs varriable initialization
// varriable decloration is declaring the name with let var or const
// varriable initialization is when you first assign a value to the varriable. 
// to understand the varriables you have to pay close attention to the scope concepts.

// var has function scope, global scope , but not block scope.
// var declared varriables are  hoisted to the top of the scope they were decalred. 
// var varriables should be decalreed at the top of the scope because this is how the engine will read it anways. this is good to ..
// avoid confusion.. 
// if var is declared and initalized in block scope {} it will become a global varriable.
// if you want a varriable created in function scope to become accessable to other parts of the code, you need to return it from the function

// let has global and block scope. 
// block scope is a scope that also includes funtion scope. to say something has function scope like var, is more restrictive then block scope. 
// let created varriables will be aviabale inside the block they were created in as well as any nested blocks. 
// let varriables created in block scope will not be accessable outside the block.
// let is not hoisted like var. 

// const has global and block scope
// const has block scope which means they are not accessable outside the block but from w/n the block and the block's nested componets. 
// varriables declared with const can't be re-assigned.  
// 

///////////////////////////////////// Chapter 5: simplifying loops ////////

/////////////////////// Arrow functions ///////
// "Call Back Functions" - functions that used as parameters in other functions, "functions that take callbacks."
// arrow functions are shorter syntax thus prettier/simplier use case for callbacks. 
// they are great cause you can write them as anynomous functions (w/o assigning to a varriable)
// right into the parameters of the function that takes the callback.
// this is prettier code because sometimes the callback function is bigger then the orginal function and that's ugly.
// this is also easier code then writing the name of the function becasuse the reviewing developer will be able directly see (w/o looking up)
// exactly what the call back function does

/// arrow functions can execute imediately like anymonous functions do as long as they are not assinged to a varriable
// or they can work like named functions and execute when called if they are assigned to a varriable. 

////////////////////// Arrray Methods: writing shorter loops with array methods ////
// array methods either change the "size" or the "shape" of the array. 
// when deciding wich method to use in a loop or isntead of a loop:...
//... ask yourself is the size or shape going to change in this data that's going thro the loop.
// and remeber, you can chain array methods, so this makes it possible to change the size and shape of the same array. 
// arry methods that change the size: filter() find() 
// chage the shape: map() forEach() 
// re-aranges the values:  sort() 
//changes the size and shape: reduce()

// forEach() no automatic return value
// find() no automatic return array: also only returns one value

/////////////// MAP()  : shaping ///////
// map() is often a replacement for a for loop. (for loops are the loops i first learned about ) 
// they work on arrays and loop for as many times as the array has memebers. 
// the map() method performs the same function ,-- the function you passed in -- the callback function ,on all the members of the array.
// it automaticly pushes the result into an array so traditionally where you would use a for loop on members of an array and assign the push
// ..method at the end, you don't need to do that anymore if you use the map method. it reduces alot of code
// 
const band = [
    {   },
    {   },
    {   }
]
const instruments = [];
for (let i = 0; i < Band.length; i++)
{
    const instrument = band[i].instrument;
    instruments.push(instrument)
}
const instruments = band.map(member => member.instrument)
// returns the same array as the for loop does above

//map is great when your end resulting array is expected to be the same size as the array you started with.
//map dosn't mutate the orginal array either. 
// map changes the information in the arrays but you get an array back the same size


/////////////////  filter() and find() :sizing ///////
// filter(); you won't change the information you will just get a reduced amount of the orginal array back.
// filter(); automaticly returns an array of results // does not mutate 
// if no result is found then it returns and empty array which is truthy so be mindful for conditonals. 
// the parameter is the functin you want to call on each memeber of the item

const scroes = [30, 82, 70, 45];
const passing = scores.filter(score => score > 59);
// [70, 82]

/// find() takes a function as an arguyment that returns the first result from the array that evaluates to be true given the circimstances it
// was passed. 
// if no result is found then it returns undefined w/ is falsy. 
// when preparing a seperate answer in a conditional satement that was passed a false value you can use the logical OR:
const profile = images.find(imgage => image.profile) || {path: './default/jpg'}


////////////////////// forEach() : side effects //////
// for each performs an action on ever memeber of the array. 
// like the previous methods, it takes a callback function that's only argument is an argument that represents a member of that array. 
// forEach() isnt a method you'd use if you want a return array. it doesn't return an array w/o using push.
// the map() could to that so much faster
// instead, forEach is for occasions where you'd want a "side effect" from a function to happen to each member of the array
// the book uses an example of an array of names called the email list. 
// the foreach() is called on each member of the email list and a named function called sendEmail is executed for each memebr of the array

const names = [
    "sue",
    "joe",
    "herny"
]

names.forEach(member => sendEmail(member));

// the book says forEach is also best used when chaining it to other array methods. 

////////////////// combine array methods w. chaining ////////////
// chaining means you can call several methods in a row (as long as you get an array back). <-- note forEach() breaks the chain b.c it doesn't
// return a method back...
// chaining is a convient way to perform several actions in a clear manner. 

//////////////// reduce() : changing the shape and size ////////
// with the reduce method you can effectively turn an array into anther data type
// or it can do anything that map filter and find can do. 
// the reduce() method has a  slightly more lengthy set up and will take some review. 

//////////////// reduce clutter with for...in and for...each /////////
