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



//One common usage is to handle a value that may be null:

function greeting(person) {
    var name = person ? person.name : "stranger";
    return "Howdy, " + name;
}

console.log(greeting({name: 'Alice'}));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"​​​​​

///Avoid chaining conditional operator in production.

///testing if the driver is over 16: 

let person = {
    name: 'tony',
    age: 20,
    driver: null
  };

  //traditional if statement

  if (person.age >= 16) {
    person.driver = 'Yes';
  } else {
    person.driver = 'No';
  }

  //OR ternary operator

  person.driver = person.age >=16 ? 'Yes' : 'No';


  // with the conditonal ternary operator you can do more than just set a value as a result of true or false. 
  // you can execute several code statements as long as the syntax is correct. 
  // the sytax calls for the staetments to be caged in parthenthis and each statement is seperated by a , and not the traditional ; . 

let isStudent = true;
let price = 12;

isStudent ? (
  price = 8,
  alert('Please check for student ID')
) : (
  alert('Enjoy the movie')
);