

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

/////////////////////////// clean up parameters and return statements ///////////
////
// if a parameter is defined and it's not passed, the value is considered as "undefined". 
// many times we don't want the value to be undefined because that is just a falsy value and it will mess up
// calucations inside the function
// instead we create default parameters with the equal sign.

function convertWeight(weight, ounces = 0, roundTo = 2) {
    const total = weight + (ounces/ 16);
    const conversion = total / 2.2; 

}

// in this situation if ounces was undefined, the total varriable would be all screwed up. and we have to plan for other programers not knowing 
// what to pass in if they don't need to use that parameter. this is also helpful because it works like typescript. other programers now know
// that anything they pass in for ounces has to be an interger. 



///////////// Destructuring with objects /////////
// w/ tradional parameters you have to pass everything in order. 
// w/ passing in a destructured object into a parameter you don't have to memorize the order and you can still acount for details that were.. 
// unplanned for using the rest operator. { ...restoperator}
/// this makes parameters more flexable. 
//  pg 133
// destructuring is a strong point of an object
// you can also destructure arrays but as long as you assin the information in the same order as presented in the array.


/////////////////////////////////////// functions chapter 7  //////////////
//
///////// writing functions for testability ///////
// testing makes code easier to refactor and legacy code much easier to understand. results in much cleaner code.
// the author says instead of writing tests for your current code , write code that is testable. 
// testing frameworks : jasmine, mocha or jest
// https://codeburst.io/how-to-test-javascript-with-mocha-the-basics-80132324752e

////////////////// Arrow functions with special parameters //////////////////

// if you're using special parameter actions like we discussed in the last chapter such as : ..
// destructuring, rest parameters, and default parameters , then you'll still need to include the parentheses in the arrow function. 

const name = {
    first: 'sydney',
    last: 'jeffries'
}

function getName ({first, last}) => '${first} ${last}'
// returns 'sydney jeffries' 
// here we stringified the first and last name with an arrow function by destructuring the object into the parameters


//  when using destructuring inside an arrow function and returning an object, make sure to write the return object inside paratheses because
// js can't tell if the curly braces are for function body. 

function getNameObject ({first, last}) => ({ fullname: '${first} ${last}'})
getNameObject(name); 
// returns {fullname: 'sydney Jeffries'}


////////////// Higher order functions //////////
//  higher order funtion is a function that returns anther function
// a higher order function is a function that needs to be called multiple times before it's fully resolved. 
// you have atleast 2 rounds of parameters before the function is fully resolved
// the parameters are independant of eachother. 
// a partly applied funtion is created from a higher order function that you passed some of the parameters in, so you've reduced the total number of 
// arguments needed for the function, but the completed function still needs more arguments. 
// partly appplied functions are a feature of higher order functions that can be used to reduce repetition as long as the responsability of the first
// set of parameters are predictable and the 2nd set required to complete the function flexuate more. 
// to invoke both parts of the functions in a single call all you have to do is put parentheses one right after anther. it's invokes the outter
// function then immmediately invokes the inner function. >> see below example
const programInfo = mergeProgramInformation(building, manager)(program);

///

//////////////// Context //////////////
// good general rule: scope pertains to functions and  context pertains to objects
// we talk about the this keyword. the context controlls the meaning of the this keyword.
//the this keyword is a large topic best covered by the 'you don't know JS' series. -- says the author. MADATORY READING
// when you use a function inside a function the this keyword looses context from the object.
// so arrow functions are great when you already have a context and want to use a function inside anther function and keep the this binded to the previous
// context
// but they are problematic when you need to set a new this binding.
// the book uses the example of an object's method containing the  map method and the call back function of that map method.

// if you defined a property of an object with an arrow function, the this binding will go to global scope, and i highly doubt there would
/// be anytime you'd want that to happen... so don't do that. 


///////////////////////////////////////           Chapter 8: Classes   //////////////////
// the class syntax ends up confusing programers from other object langauges because the class syntax is just sugar. js is still, regardless of it's 
// new syntax sugar, a prototype language... and the new snytax confuses devs into thinking it's instead a class langauge. this creates suprises 
// when these people don't understand thaat it's still a prototype langauge.
// 

class Coupon {   // declaring a class with the class keyword
constructor (price, experation){
    this.price = price;
    this.experation = experation || 'two weeks';
}

getPriceText() {
 return '$ ${this.price}'
 }

}

}

const coupon = new Coupon(5); // creating an instance of that class with the new keyword
coupon.price // returns 5
coupon.experation // returns the default value 'two weeks'
coupon.getPriceText() // returns '$ 5' 


/////////////////// Sharing methods between classes using inheritance ///////////
// inheritance bloats code because in the background a loop runs to check the object's properties and then the object's prototype for that property
// this background loop can slow things down. 
// thus, use inheritance with caution. check out other ways to share methods taht don't require inheritance. a popular techinque called Compesition is out
// (but, these notes are not about compesition. regardless tho, you should still check it out.)
//
// 
// creating class that will inherit from the other class 

class flashCoupon extends coupon {                                          // use the extends keyword
    constructor(price, expiration){
        super(price);                                      // the super keyword extends a property the parent class, and you pass it the same
                                                          // parameter as you would've passed the parent
        this.expiration = expiration || 'two hours';          // this was a property we over-road from the parent by giving it the same name as the parent
    }                                                          // but then giving it a new value and this works b/c prototype chain


    isRewardsEligible(user) {
        return super.isRewardsEligible(user) && this.price > 20 ;     // polymorphism: the child object can use the parent's method and 
    }                                                                  // add some of it's own implimentation to it. 
}

///////////////// simplify interfaces with get and set //////////
// i marked up the book on page 191 instead of typing here for some reason.
//  but basically because private properties don't exist in js yet we have to use setters as a work around.
// i'm not sure what private properties are like in other langues but it doesn't matter
// in JS if you didn't want a property to be updated by other developers you would use the "_namingConvention". it would cause pause for the developers
// setters don't prevent the propery from updating either unless you create that setter function to do so. 
// you can create a setter function to to do anything... but to keep the nature of a setter in character use setter functions to vailditate the
// data that's being set for an example.. checking to make sure that the data type you're updating the property with is of the intended data type. 
// 

////////////// Generator functions //////
// generator functions are kind of like higher order functions in that you can acess the function one piece at a time... it's useful if you have 
// information that you want to acess in parts. and like a higher order function you can the parts in different places. 


function* getCairoTrilogy() {
    yeild 'place walk';
    yeild 'place of desire';
    yeild 'sugar street';
}
const trilogy = getCarioTrilogy()
trilogy.next();
//{value: 'place walk', done: false}        // the done property describes in boolean w/o not the function has given up all it's data yet. 
triology.next();
//{value: 'place walk, done: false} 

// people are mainly using them b/c they make objects and more complex data types into iteratables. 
// objects inside of objects that are inside of objects that all contain the same key pairs is a data struture type known as: tree data structure
// whebn doing strange data structure types like these, it's great to use generators because you won't have trouble iterating over 
// all of the key value pairs. 


////////// the while loop ////////////
// while vrs for loop. 
//with a while loop we don't have an exact idea how many times it will loop.
// a for loop's incrementing varriable is contained in side of it.
// with the while loop, the varriable is outside the loop.
// both loops run untill the condition becomes true...
// you risk plugging in something that's already true with the while loop b.c with the while loop, we are using it
// because we don't know the exact number of iterations... if we don't know that, there is also a good chance we don't know if it's already true!
// 

///////////// Bind() solves "this" errors /////
// earilier we learned how functions create new context and leave unpredictable results. we learned how to use an arrow function 
// to perserve the context of this.
// this keyword is binded to the object of which it was called. 
// never use an arrow function as a method inside the constructor function...
// and if you use the this keyword inside of setTimeOut methods, you might be suprised that the "this" is binded to the window object, 
// the object of which the method belongs to. 
// if you're encountering unexpected results with the this keyword, try looking into binding the this keyword. 
// with the bind method you'll be able to control what the this keyword is binded too..


/////////////////// Acess External Data with Fetch() and promises //////////////////

///////// retrieve data asynchronously with promises ///

// javascript is an asynchronous language with the implimentation of setTimeOut and api's such as the fetch(), promises, and ajax. 
//if a language wasn't asynchronous event listeners would have to wait for an ajax to complete, before they can fire off. 
// used to call backs would be nested in parameters, and the call back would take anther call back, so the parameters would be 3 deep.
// with promises we can chain methods and it looks alot neater then it did. 
// promise is an action that takes an asynchro action and if the action fails, the catch method is called and if it works the then() method is called.
// promises are usually excuded along side of the xhr object or html 5 api.
//
function getUserPreferences() {
    const preferences = new Promise((resolve, reject) => {
        resolve({
            theme: 'dusk'
        });
        reject({
            type: 'Access Denied'
        })
    });
    return preferences 
};

getUserPreferences()
.then(preference=> failMusic(preference.theme))      // this parameter "preference" value comes from the resolve theme: dusk
.then(music => getArtist(music.Album))  // the music paramter is what's returned from the last then method.
.catch(e => console.log(e) );  // the parameter is what's returned from the reject method. 


/////////  using fetch () to make calls to an API 

//http:://jasonplaceholder.typicode.com/ 
// website for mock blog data.  their tool JASON server allows me to mock api's locally. 
// fetch is called with the endpoint url as the argument.
fetch('http:://jasonplaceholder.typicode.com/ ') 
.then(data => { 
    if (!data.ok){
        throw Error (data.status)
    }
    return data.jason
})
.then(post => {
    console.log(post.title);
})
.catch(e => {
    console.log(e)
})
// in the fetch api the ok property will return true as long as an error code doesn't exist. 
// this okay property is a go around because the promise object's catch method is not reliable when dealing with fetches.

// if you're going to send data back; aka post method , then you'll have to supply the object config as the 2nd parameter. 

const options = {         // here we make our config object. the list of attributes is exhaustive on mozilla website. 
    method: 'POST',         // the ones we don't specifiy will take default value. 
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(update),
}, 

fetch('http:://jasonplaceholder.typicode.com/posts ' , options)  // <-- we threw in the object in the fetch's 2nd parameter
.then(data => { 
    if (!data.ok){
        throw Error (data.status)
    }
    return data.jason
})
.then(post => {
    console.log(post.title);
})
.catch(e => {
    console.log(e)
})



/////////////// maintain state with local state /////////////
/// enter the localStorage object.
// when you store data locally you're preserving information on a particular bowser on a particular device.
// the localStorage object has methods: setItem , removeItem, deleteItem , clear
// the local storage object saves information as key value pairs. the information must be a string. 
// so if you wanted to store a datastructure of information, you'd have to convert it into a string first. the book uses JASON.stringify to convert either
// an object or an array into a string that get's stored in the local object, and JASON.parse to convert it back into the data type whenever that information
// comes back out and needs to be in the orginal data type format. 
// to remove all the key value pairs stored in the jason you can use the .clear method and it returns a "clean slate".




/// the sessionStorage object is alot like the local storage object, but it automaticly cleans out once the user closes the tab. 
// vrs. local storrage, it will only clean on that devise, on that browser when we code it to. 
// in local storage i can store objects 

/////////////////////////// chapter 10 //////////////
// organizing code and making it extendable, reuseable and managemable is called the architecture for the code. 
// code architecture 
// this chapter will teach code architecture in file management, npm, componet architecture pattern

///////////////// isolating functionality with import and export //////////
// by not exporting some functions youre essentailly making private functions out of some. 
//  to export functions from your file
export { nameOfFunction, nameOfFunction2 };
// to import: 
import { nameOfFunction, nameOfFunction2 } from '.util';

// you can export varriables and classes with the same syntax. 
// and to use them after they are imported 
// and you don't have to import all the ones that you exported from that file. 

import { capitalize } from '.util';
function greet(name) {
    return 'hello, {$capitalize(name)}!'     ///here we used a template literal 
}

// if you want to import all the aviabale functions you can.. and you'd assin them to an object name and call them like methods that belong
// to this object that you just made up at the import phase. 
// follow the astrick snytax: 
import * as utils from './util';

export function greet(name) {
    return 'hello, ${utils.capitalize(name)}'
}


// or you can type the export keyword before the function decloration and that does the same thing as export { greet }
// splitting code into different files helps keep things organized and logicalily. we will learn more about building applications with compnent archeiture. 


///////////////// NPM   /////////
// the book talks about a package called lodash - a suite of tools for converting data. they use the example of quickly converting a map to an object. 
// npm doesn't approve of the code in it's database- however it will remove the code. youre responsable for any malicous code that maybe in your report.
// check the codebase- good general rule is ifthe code doesn't have a commit in the last 6 months- move on from this abandoned piece of code.
// code that won't be apart of the production product is installed as a dependancy :
npm install --save-dev prettier 
// write the script for the local file. 
///
//
//
//
// start by climing to your program directory, npm init 
//  that installs the package.json
// after npm init do the install : npm install --save prettier -dev //// ( the dev is optional)
// then a package-lock.json appears and stuff will be automaticlly installed into your package.jason
// the package-lock is a run down about the dependancies that the package has. don't touch it. don't worry about it
// if you want to run a script then add it into the package.jason NOT the package.lock !
///
////////////////////// component architecture ///////////////
// instead of spreading files out by type of file such as putting the css files in the css directory and onward... developers of web apps are seperating
// files by component. for instance, the nav bar would get it's own file... and the button would have it's own file. 
// however, this archeitecture is dependant on build toools such as the ones supplied in frameworks as React. 
// this cool piece of code is gonna update the copyright year so that we never have to mannually change it .


import react from 'react';
import '.copyright.css';    // we imported the css file into the javascript. in this case, the react build tools will know how to handle this 

export default function CopyRightStatement() {
    const year = new Date().getFullYear(); 
    return (
        <div className="copyright">
        copyRight {year}
        </div>
    );
}

// the method of the madness is to have a componets directory, and inside this directory, a directory for each component.
 //the css and the js and the html each have it's own file in this directory. 
// it's cool because the whole componet is easily re-usable because the styles are right there! you don't need to go find the CSS in a large dump of..
// a css file. 

// the book makes an example of a button. the book illustrates inorder to make that button
// re-usable across projects, make a component out of the event listener because the event listener will be unique
// per project but the button and maybe the button's style can be stolen a reused in anther one of your projects. 
// making the serpartion between the two will allow for easy copy and paste of the button componet across projects. 
// on the button that they're strving to make reuseable, there is an image on that button.. they set the image path name to it's own component, and the
/// message on the button also has it's own componet. 
// so one button commonet has 3 componets split out, because each component will change across projects. 
// when you start creating the page, you import the componet's directory into the page.



////////////// the book talks about webpack and babel 
// babel is your god send for writing all browser friendly javascript code. when  babel converts your es6 code to es5 code it doesn't have a conversion
// for es6 features such as import and export... so unless you handle that with webpack, your import export will not work and your finalized babel
//  code will tell you that there is a reference error. 

// to fix this: install the babel-loader from webpack. babel loader will get the imports from the js files. 
// but babel loader will not fix the css imports and exprots...
//you need to install css-loader and style-loader for that. 
// 


///////// Destructuring assignment: destructuring assignment with objects  ///////
// destructuring can be done on objects and arrays. 
// when youre destructuring an object, youre actually creating a varribale out of a key.value pair. so, instead of calling with object dot notation, 
// you'd call it more like a varriable and the name of the varriable must match the relevent key name. 

const landscape = {
    photographer: 'sydney'
}

const { photographer } = landscape // declare the destructured assignment and put the name in {}. the {} signifies you're destructuring an object's key
// to be a varriable.
photographer // returns 'sydney'

// you can destructure more then one varriable at once

// you can destructure as many keys from the object as you'd like at once. 
const landscape = {
    photographer: 'sydney',
    year: 2019,
    month: "may",
}

const { photographer , year  } = lanscape    // what happens if you don't include one of the keys? nothing, anther developer might expect all of them
// to be destructured, so this might be annoing for them.
// but if you don't know all the keys and you don't mind creating an object out of all the missing key/values then do this: 

const landscape = {
    photographer: 'sydney',
    equiptment: 'cannon',
    format: digital, 
};

const { photographer ...additional } = landscape;     /// by using the spread operator we are able to create varriables for everything even if offhand - we don't
// know the names of the keys in the object. also, the name you choose following the rest operator is the name you will use to call upon all of the 
// remaining information

additional // returns {equiptment: 'cannon' , format: 'didgital' }

// pretend you have a bunch of picture objects and some picture objects contain more information then others.. 
// and you don't know which picture objects contain missing information
// but you want to be prepared for the objects that contain missing information
//so when creating varriables by destructured assignment, you're going to create deafault values of all the keys because you don't even know..
// if the object you're working with is one of the objects with the missing information.


// you can destructure an object and prepare for the situation when the object doesn't have that key/value by entering in deafults

const landscape2 {

}   // an object with missing keys

const { photographer = 'anonymous', title} = lanscape2;
photographer 
//anonymous
title 
// undefined

////////////// destructuring assignment with arrays /////////////