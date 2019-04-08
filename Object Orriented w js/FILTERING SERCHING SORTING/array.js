//Arrays and  Array methods 


// alittle about arrays: 
// arrays are objects. their index number is the object's key. they are refered by their reference
// the items in an array are sometimes refered to as elements. 

//adding items to an array: 
 Push(); //pushes an element to the top of an array  
 unshift(); // puts an element in the front of the line. it cuts in line!


 //removing elements from an array:
 Pop(); // pop from the top
 shift(); // removes the first element from the array. 


 //iterating over the items in an array
 // there are several ways to iterate over the items in an array such as using the Loops...
 // or these build in array methods. 
 forEach(); // a function for each element in the array gets executed. 
 
 
 map(); // map ccalls a function on emap() does not change the original array.
 //map() does not change the original array.
 //The map() method calls the provided function once for each element in an array, in order.
 //the following will return a new array containing the square root of each element in the orginal array
 let numbers = [4, 9, 16, 25];
 let newNumbers= numbers.map(Math.sqrt);
  console.log(newNumbers);
 // returns (4) [2, 3, 4, 5]

 


 some(); //checks that some elements in an array pass a test specfied by a function
 every(); // checks if all elements in an array pass a test specified by a function


 //combining
 concat();  //creats a mew array containing this array and other arrays
var hege = [1, "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);
console.log(children);
// returns (5) [1, "Lone", "Emil", "Tobias", "Linus"]


// filtering
filter(); // creates a new array with elements that pass a test specified by a function 


// re-ordering: 
sort(); // re-orders strings and numbers in an array by random or assending/desending in  alpabetical or numerical order.
// doesn't create a new array. 
// with out the comapre function , by default the sort method tests for strings and sorts the strings alpabeticly from a-z
// because of the default; if it was sorting number values 
// then  "25" is bigger than "100", because "2" is bigger than "1".
//this is why we use compare functions: so that it can sort numeric values

//  assending numerical order
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
//1,5,10,25,40,100

// dessending numerical order
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// 100,40,25,10,5,1



//sorting an array in random order: 
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});
                             // ^^here it has to be a decimal value inorder to work 
// 25,10,40,5,100,1 
// ^^ and actually the values sort in different order each time we run the above method. 
    

// grabing the highest and lowest value of the array by using the sort method and index: 
//There are no built-in functions for finding the max or min value in an array.
//However, after you have sorted an array, you can use the index to obtain the highest and lowest values.

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value



.reverse(); // reverses order of items in an array. it only does it one way and isn't as customizable as the sort method. 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
// Mango,Apple,Orange,Banana
// it's as if you're standing in line and the back of the line becomes the front of the line.




//////////////////Jquery filter and sorting methods//////


//// the remove method 

<div class="container">
  <div class="hello">Hello</div>
  <div class="goodbye">Goodbye</div>
</div>

$( ".hello" ).remove();   // this gets rid of the hello div. 



///// the add method 
// several acceptable paramters:
// .add(selector)
// . add(elements)
// .add(html) type an html fragment to add to the set of matched elements
// .add(selecton) type an existing jq object to add to the set of matched elements

// ^^ the stuff passed into the method is the stuff that it will add. 

<ul>
  <li>list item 1</li>
  <li>list item 2</li>
  <li>list item 3</li>
</ul>
<p>a paragraph</p>

$( "li" ).add( "p" ).css( "background-color", "red" );  // notice p was added to the end of the last Li



////removing element/s from the selection with the not method
//the paramter is the elements that you wish to disclude from the following chained method. 
/// several acceptable parameters: 
// .not(selector)
// .not(function)
//  .not (selection)

<ul>
  <li>list item 1</li>
  <li>list item 2</li>
  <li id="notli">list item 3</li>
  <li>list item 4</li>
  <li>list item 5</li>
</ul>
$( "li" ).not( document.getElementById( "notli" ) ).css( "background-color", "red" );

 // This statement changes the color of items 1, 2, 4, and 5. We could have accomplished the same thing with a simpler jQuery expression..
 // but this technique can be useful when, for example, other libraries provide references to plain DOM nodes.


//// iterating with the each(); method
// it applies the same function to each element in the set. 
// acceptable parameter: 
// each.(function);  <-- A function to execute for each matched element.
//

$( "li" ).each(function() {
    $( this ).addClass( "foo" );
  });



 // .filter();
// reduces the number of elements in a matched set to those that either match a selector or pass a test specified by a function
// parameters are selectors, functions, elements or selections

<ul>
  <li>list item 1</li>
  <li>list item 2</li>
  <li>list item 3</li>
  <li>list item 4</li>
  <li>list item 5</li>
  <li>list item 6</li>
</ul>

$( "li" ).filter( ":even" ).css( "background-color", "red" );


//// Converting
.toArray(); 
// converts a jquery collection to an array of dom elerments, enabling the use of the vanilla js array methods



///////////////////Arrays vrs. obejcts: choosing the data structure ///

//keeping Objects in an array:
// put objects in an array when order is important
// to acess the object in an array you have to use the index number
// adding or removing objects from an array will mess up the index so be careful bc it can break alot of code 
// to add remove objects in an array you use vanilla js pop shitft push unshift
// to iterate use foreach(), some(), every()

var people [
  {name: "sydney", rate: 70, active: true},
  {name: "paul", rate: 60, active: false},
  {name: "sheryl", roate: 50, active: false}
]

person[1].name;

//keeping  objects in objects : 
//  good when you want to acess the objects by object name
// but each key must be unique 
// to add or remove objects from objects use the delete keyword or set to blank string
// to itteratte over child objects and use a function on them (much like the array map method) use..
// Object.keys(obj) 
//Object.values(obj)
// Object.entries(obj)
// these reutrn an array 


   let user = {
    name: "John",
    age: 30
  };

Object.keys(user) //= ["name", "age"]
Object.values(user)// = ["John", 30]
Object.entries(user) //= [ ["name","John"], ["age",30] ]

//Here’s an example of using Object.values to loop over property values:

 let user = {
  name: "John",
  age: 30
};

// loop over values
for (let value of Object.values(user)) {
  alert(value); // John, then 30
}

 // ^^ iterates over our keys but doesn't itierate over the parent's keys
 // if the object has symbols as keys the symbols woundn't be iterated over. 


 ///////////////Filtering
 .filter(); //array method that creats a new array with elements that pass a test specicied by a function
 // its only acceptable parameter is a function that returns a filtered selection.  you call this method on the name of the array
 // you still have to name an empty array that you want your resulting array to be set to. 
// the book filters an array using the forEach method and the filter method
// the forEach method doesn't automaticlly create an array with the results like the filter method does. but it loops thro the array and applies the same..
// funtion to every item in it. 
// foreach can apply more than just sort as shown in the book. 
// 








///////////////Sorting algos ///////

////// conditional ternary operator aka the question mark operator. ///
// this operator is frequently used as a short cut for the if statement.
// the return values are seperated by colons. 

condition ? exprT : exprF 
//If condition can be converted to true (it is truthy), the operator returns the value of exprT; 
//otherwise (when condition is falsy) it returns the value of exprF.
var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"

//One common usage is to handle a value that may be null:

function greeting(person) {
  var name = person ? person.name : "stranger";
  return "Howdy, " + name;
}

console.log(greeting({name: 'Alice'}));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"​​​​​

///Avoid chaining conditional operator in production.