/// these exercises from codewars website are super valuable because i'm able to practice converting datatypes back and forth to take advantage of 
// each data type's Object's methods and properties. 



// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

//their correct solution 
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }

  // convert number into string, use split method to create a string into a nonmutating array, each value of the array was created
  // if an empty string of "" is used as the separator, the string is split between each character creating [9,1,1,9]
  // use the array map method to create the new values on each memeber of the array.
  // array of numbers back into a string with join("").  the parameter is the seperator. by default it seperates at , 
  //and from strings you can convert to numbers with the Number(); method. 



//   Simple, given a string of words, return the length of the shortest word(s).
//   String will never be empty and you do not need to account for different data types.
// Test.describe("Example tests",_=>{
//     Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//     Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
//     }); 

// my correct sollution 
function findShort(s){ 
    const stringarray= s.split(" ")
    const numarray = stringarray.map((value) => value.length)
    console.log(...numarray);
    return Math.min(...numarray);
}

 /// math.min wouldn't take my array of numbers so i had to create it into a list with the spread operator. 




//  You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this

function likes(names) {
    if ( names.length == 1 ) {
    return `${names[0]} likes this`;
    }
  }

  // i learned that the length property includes the actual length and not the indexed length

  // my final correct solution: 

  function likes(names) {
    if ( names.length == 1 ) {
    return `${names[0]} likes this`;
    }
    if ( names.length == 0 ){
    return "no one likes this" }
    if (names.length == 2 ) {
    return `${names[0]} and ${names[1]} like this` }
    if (names.length == 3 ) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    if (names.length > 3) {
    const remainder = names.length - 2
    return `${names[0]}, ${names[1]} and ${remainder} others like this` }
  }

//   Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//   Examples input/output:
  
//   XO("ooxx") => true
//   XO("xooxx") => false
//   XO("ooxXm") => true
//   XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//   XO("zzoo") => false

// my failed attempt that i gave up on:
function XO(str) {
    const arrayy = str.split('')
     const filterArrayy  = arrayy.filter((value) => (value == "o") || (value == 0) || (value == "x") )                                                    
   console.log(filterArrayy)
   
   filterArrayy.forEach(function(value){
   let o 
   let x 
   if (value == "o" || value == 0) {
   return o++ }
   if (value == "x" ) {
   return x++ }
   console.log(o);
   })
   
     }


/// a working answer:

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// filter creates a new array of the elements grabed from the function ran on each element of the array. 
// we filtered our input two ways and checked to see if their lengths are equal to eachother. 

}

  // my problem was i didn't understand the final desired result was a boolean, otherwise I believe I could have solved it. 


//   Given: an array containing hashes of names

//   Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
  
//   Example:
  
//   list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
//   // returns 'Bart, Lisa & Maggie'
  
//   list([ {name: 'Bart'}, {name: 'Lisa'} ])
//   // returns 'Bart & Lisa'
  
//   list([ {name: 'Bart'} ])
//   // returns 'Bart'
  
//   list([])
//   // returns ''

// my correct answer: 
function list(names){
    if ( names.length == 1 ){
    return names[0].name }
    
    if ( names.length == 2 ) {
    return names[0].name + '&' names[1].name }
    
    if ( names.length == 3) {
    return names[0].name + ', ' + names[1].name + '& ' + names[2].name }
    
    }


    // The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

    // To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
    
    // Input
    // Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
    
    // Note for F#: The input will be of (int list list) which is a List<List>
    
    // Example Input
    // [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
    // Output
    // Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
    
    // Example Output
    // ["Open", "Open", "Senior", "Open", "Open", "Senior"]

    // my correct answer: 

    function openOrSenior(data){

        let newData =  data.map(([age,handicap]) => { 
        if (age >= 55 && handicap > 7) {
          return 'Senior' } 
          else { 
          return 'Open' }
          })
        console.log(newData)
          return newData
        }


    //     Make a program that filters a list of strings and returns a list with only your friends name in it.

    //     If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
        
    //     Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
        
    //     Note: keep the original order of the names in the output.
 // my correct answer: 

    function friend(friends){
        return friends.filter((friend) => ( friend.length === 4 ));
        }

        // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

        // Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
        
        // Note: If the number is a multiple of both 3 and 5, only count it once.
        
        // Courtesy of ProjectEuler.net
        
        
        
        function toCamelCase(str){
            //string.substr(indexstart, length) 
            let advisedString;
            if(str.indexOf("-") === -1) {
            // do nothing
            }
            else{
            return advisedString = str.substr(str.indexOF("-"), 1)
            }
            console.log(advisedString);
            advisedString.substr(advisedString.lastIndexOF("-"), 1)
            
            str.lastIndexOf("-")
            str.toLowerCase();
            console.log(str);
            }