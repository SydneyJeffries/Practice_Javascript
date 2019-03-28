/////This is a doc from a class I took on Udmey with instructor Mosh Hamedani on Object orriented programing in Javascript. 


///////////////////section 5 ES6 classes ///////////////

///es6 classes create a new way to create objects in JS. they are not classes like c# and java, they are just snytactic sugar to look more like class objects. 

//function Circle (radius){//
 //   this.radius
    
 //   this.draw = function() {
 //       console.log('draw');
  //  }
//}


class Circle {
    constructor(radius) {              ///constructor method is the same as the constructor function that creates an instantce of an object. 
        this.radius = radius             //inside the constructor method we can define instance memeber
        this.move = function() {
            console.log('move');
        }                              
    }

    draw() {
        console.log('draw');    // here draw is a method of the prototype Circle; a prototype memeber and not in instant memeber
                                /// instead of setting draw to a function to create a method, we 
                                //declare using the syntax as if it  were already an existing method. 
                                // if we didn't want this method to be apart of the prototype, then we will define it in the constructor. 
    }

}

const c = new Circle(1); // when we anaylize the c object in chrome, the move method will be apart of it and the draw method will be named in the prototype.

//in chrome, typeof Circle will return as a function. classes are essentally constructor functions. 

///es6 classes offer cleaner syntax for prototpyical inheritance. 


///////////////////////// Hoisting //////////


 ///THIS IS A FUNCTION DECLORATION... 
function sayHello() { }  //in a function decloration we give it a name 


// THIS IS A FUNCTION EXPRESSION... 
const sayGoodbye = function ()  { };  //in a function expression we asign a nameless function to a varriable
const number = 1; // this is an expression. Expressions are terminated with simicolons. 

// the reason that function Expressions and Declorations should be distinguished in JS is because 
//you can call on function decorations before they are declared. 
//but, if you try to call on a function expression before it's declared you will get an error. 
// function Declorations are considered "hoisted" in the code. 
// "hoisted" meaning they are "hoisted at the top" of the code whenever the engine reads. this means that they 
// will read the function Declorations first. 
//the Function Expressions are not "hoisted" and they stay in the same spot in the code as the place that you wrote them.
//like wise, the number varriable is considered an expression. if i tried to call on the number varriable before i named it, it would return an error. 

// you can create an ES6 class by expression or decloration
//however, unlike function declorations that get hoisted, class declorations do not get hoisted. 

//THIS IS A CLASS DECLORATION....
class Circle {

}

//THIS IS A CLASS EXPRESSION...
const Square = class {


}

// you can create an ES6 class by expression or decloration
//however, unlike function declorations that get hoisted, class declorations do not get hoisted. 
// so the differences between expressions and syntaxes are non-existance other than the snytax used 
// *the author recomends using the decloration syntax for classes at all times 



//////////////////////// Static Methods /////////////

// in class object orriented programing languages there are what's called: INSTANT METHODS and STATIC METHODS
// "Instant Methods" are methods are are aviabale in an "instant creation of the class. "
//       previously, what we'eve learned from prototype obj orriented lanagues was reflected to be either a prototype memeber or an instant memeber. 
//       encapsilation is grouping stuff with the correct object
//      previously, if we wanted to encapsilate a memeber we would create an expression in an object. (an expression is setting equal to a varriable)
//      previosuly, or we could encapsislate a memeber by setting the property's attributes with  the master object's defineProperty method: 
//   let person = {name: "mosh"};
   // object.defineProperty(person, "name", {
   //     configurable: false;
  //      writeable: false;
  //      enumerable: false
 //   });

 //      or we'd  practice encapsilation and inheritance together by setting certain memebers to the instant and certain memebers to the prototype. 


// class object orriented programing uses what's called static methods.
// the static methods are not aviabale in an instant creation of the class.we use static methods as as utility methods that we don't want tied to any particular object.
// in order to use the static method we'd have to call and use the class object that the satic method resides in. 

Class Circle {
    constructor(radius){
        this.radius = radius; 
    }


    // instance memeber
    draw() { } // also in prototype obj or we'd call this a prototype memeber instead of an instant memeber

    
    // static method
    static parseFloat(str) {  // this is our encapsilated memeber that we want to be only accessable when calling the Circle Class. 

    }


    }


}




