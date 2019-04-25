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
  // array of numbers back into a string with join(""). 
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


