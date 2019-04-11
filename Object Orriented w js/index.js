///These are all docs from a class i took on Udmey with instructor Mosh Hamedani on Object orriented programing in Javascript. 

console.log('hello world');
const circle = {
radius: 1,
location: {
    x: 1,
    y:1,
},
draw: function() {
    console.log('draw');
}
};

circle.draw();

// you dont want to use obj lit syntax if youre duplicating an object with a method 
// using es6 factory functions.  just like the es6 constructor function, they are used to create an object that will be duplicated.
//  however it's drier code b.c you don't have to leave place marker for property values, that you will later define by parameters, when you create it

function createCircle(radius,) {
    return {
        radius,
        draw: function() {
            console.log('draw')
        },
        location: {
            x: 1,
            y: 1,
        }
    }
}




// using consturctor functions
/// this is the constructor function from es5 used to create duplicate objects. with this method we don't get to use the drier code mentioned above and we have to keep the palce holder
// constuctor functions have to be named with a capital letter and to create an object use the new keyword. 
// devs from c# and java perfer constructor function syntax/ 


function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }

}
const anther = new Circle(1);

// ^^ this creates aa circle that's radius property value is 1.




//constructor property
// every object in js has a property called consturctor. that references the function that was used to create or "construct" the object.

anther.constructor 
// this returns the function we used to create the object
//  behind the hood js uses functions to create all of our objects. even the ones we created with ob lit syntax.
// it's funny b.c obj lit syntax doesn't look like a function. 

//for each object that we create, javascript creates anther object for it behind the hood that we can use to learn things about our object
// it has properties we can access such as length (returns the number of arguments), constructor (shows the function it's made out of ),
// and name that returns the name of the function that created the object. 

// in JS functions are first class-objects because they ahve properties and methods just like any other object. 
// A first class object is an entity that can be dynamically created, destroyed, passed to a function, returned as a value, 
//and have all the rights as other variables in the programming language have
// what distinguishes js functions from other js objects is that they have the ability to be called. 
// therefore a js function is an object that can be called. 



//VALUE TYPES vrs. REFERENCE TYPES
//value types are numbers, strings, booleans, symbol, undefined, null
//reference types are objects, functions and arrays. 
// in JS arrays are also objects
// in a nutshell Js is made of premitives ( numbers, strings, booleans, symbol, undefined, null) and objects (objects, functions and arrays). 
// how do premitives in objects behave differently? 

let x = 10

let y = x

x = 20;

// ^^ x returns 20 and y returns 10 
// bc they are independant varriables from eachother
// in this case, independant varriables means y's value will not be RE-writen to change when x's value changes. 
// but if you redefined the x to be 20 BEFORE you declare y and asign it's value to x, then y = 20. 
//the main difference is thawt prematives are immutable. an immutable means that the state can't be redefined after it's created.
// objects are mutable: they can be re-defined after they're created. 

let x = { value: 10 };
let y = x

x.value = 20;
//^^ y returns 20
//^^^ when x is an object and not a premitive varriable, (like the last senerio), the value of y returns as the updated x value. 
// this is because ,behind the hood, x does not equal to the object. it's instea the adress that the engine finds the object's values at. 
// so when y is equal to x it's equal to the adress of the object.
// thus when a premitive is referenced it's reference is it's value, but when an object is referenced it's reference is it's "address reference"

let number = 10;

function increase(number){
    number++ ;
}

increase(number);
console.log(number); // number returns 10 and NOT 11

// ^^ this is because these premitives are independant and console.log is referencing the global varriable. 
// this proves how the The prematives are independant because  the value does not update 

let number = {value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // the value will return as 11

// ^^this is because when an object's values change any reference to that object's value also imediately changes. ( because of teh whole refrence to reference thing)

//PREMATIVES ARE COPPIED BY THEIR VALUE
//OBJECTS ARE COPPIED BY THEIR REFERENCE



function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

// objects in JS are DYNAMIC
//DYNAMIC Objects mean that we can add and remove from the object after it's been created. 
 user.token = "sadfasdf"  //adds to the object
// in C# and java you can't update with this shortcut, you'd have to find your orginal object and aply the updates inside it. 

circle.location = { x:1 };
circle['location'] = { x: 1 };  // does the same thing (creates a property and adds a value to it) 
//but it's useful when you want to dynamicly acess a property name

const propertyName = "center location";
circle[propertyName] = { x: 2 };  // because circle['center location'] has a space, it does not work


////////////////////checking the properties exist in the object and executing code ////////////
//
// you would use the "in operator" if you are checking to see if an object or it's prototype has a specified property. 
// in otherwords use the in operator to check to see if the property is "inside" the specified object.
// syntax :  prop in object
// prop: a string or symbol representing a property name! the property name is otherwise known as a key.
// object : write the name of an object that will be checked for the property thro out it's prototype chain...
// object is inclusive of arrays, objects and funtions.

// the in operator being used on an array: 

var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees        // returns true
3 in trees        // returns true
6 in trees        // returns false
'bay' in trees    // returns false (you must specify the index number, not the value at that index)
'length' in trees // returns true (length is an Array property that's on the array prototype)

//(remeber operators are used for if, loops, and switch statements, so the above example is kind of meh..)
//If you set a property to undefined but do not delete it, the in operator returns true for that property.
// the in operator works, but you could also use the truthy and falsy values of properties that belong in an object
// the following code i wrote won't execute if mycar.make is set to undefined, or zero aka falsy values.

var mycar = {make: 'Honda', model: 'Accord', year: 1998};

mycar.make="";

if(mycar.make){
console.log("yes"); //returns nothing because when mycar.make was redefined to undefined it became falsy so the if statement didn't execute
}

///but, with the in operator you don't risk the code block not running because of some falsy value that the property was set to... just got to be sure to
// .. use the delete keyword to clear properties, instead of setting them to undefined. 


///////////////////////////////// the for in loop with mosh //////

// the for..in  is a loop that iterates over enumerable properties of an object. 
// the for..in loop won't iterate over non-enumerable properties or symbols.  
// a property of an object is usually enumerable (thus iterateable with the for..in loop) unless it was crated by the Object.defineProperty method 
// in which, you would have to  mannualy set the enumerable value to be true. 
// if you set the enumerable attribute to false the object.keys() method and the for..in loop won't be able to find it. 
// enumerablability is an attribute settable by object.defineProperty that provides abstraction from certain methods. 
//The loop will iterate over all enumerable properties of the object itself and those the object inherits from it's constructor's prototype 
// (properties closer to the object in the prototype chain override prototypes' properties).
// pro-tip: don't use the for.. in loop on arrays. it's best to use the forEach() array method to loop over the values of an array. 
// mozilla website says the for...in loop maybe best for debugging purposees, being an easy way to check the properties of an object by outputting to the console.
// the for.. of loop is recomended for changing the values over the for..in loop
// for..in loop does have the power to alter all of the values inside an object. but it's recommended to use the for..of loop for this. 
// it iterates over the key names

function Circle(radius, size){
    this.radius = radius;
    this.size = size;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.protomemeber = "hidden";   // belongs to the constructor object only 

const circle = new Circle(10, 10);

circle.newkey = "was it iterated? yes";


console.log(circle.newkey); ///returns "was it iterated? yes" //because when this was writen the address reference had not been changed yet. 

for (let key in circle) {
    if (typeof circle[key] !== "function")
    circle[key] = 5;
    console.log(key, circle[key]);
}


console.log(circle.newkey)  // returns 5  ^^ here the for in loop made all of the values = 5. 


/////////////////////mosh's example///////////


function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

circle.newkey = "was it iterated? yes";

for (let key in circle) {
    if (typeof circle[key] !== "function")  // the typeof operator returns a string value of the operator that describes it's datatype. 
    console.log(key, circle[key]);          // check that the value isn't equal to function and as long as it's not the following code executes. 
}

// ^^ using a for in loop,  here it iterated over all the properties in the circle except...
// for the method because we included an if statement exluding the methods. 


///////////////////////////////MOzilla example of for..in loop while excluding the constructor/// 

// if you want it to not iterate over the constructor's properties then you can include an if statement below the for in loop that excudes ..
// the constructor's properties 

var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  } 
}

// Output:
// "obj.color = red"

/////////end of mozilla example////



function Circle(radius){

    let color = "red" // <-- is not a property of an object b/c it's not set with this. this.color = red is a property.
    // this is only a local varriable inside the constructor function. // when we go outside of this function the varriable goes out of scope and dies. 
    
    this.radius = radius
    
    let defaultLocation = { x: 0, y: 0} // it was this.defaultLocation = {x:0 y: 0} but we changed it to be a local object .
    // By doing this we make our interface of the object simpler 
    //Because now we'd only have to update the value every time it's seen in the object and not everywhere in our code. 
    
     function computerOptimunLocation() {
        console.log('paw');
        }
    
    let math = 20;
    
    this.draw = function() {
        computerOptimunLocation();
        console.log('draw');
        console.log(color)
        }
    }
    
    const circle = new Circle(10);
    circle.draw();
    circle.computerOptimunLocation = function(){
        console.log('flaw'); };
    circle.computerOptimunLocation();
    
    /// a CLOSURE is a piece of information that a function calls upon
    // (at any point of the function; parameter or inside the function) that belongs to the outside scope. 
    // a closure is when a function or expression needs to look up for the varriable. 

    //testing: here inside the constructor funtion i've truned computerOptimunLocation into what I suspected would behave like a local function,
    // but somehow from the outside I can still change function and even proform it. 
    // im going to see if the local object behaves the same way, where i can edit, and call it from the outside of the constructor function
    
    circle.defaultLocation = {x: 1 , y: 0};
    console.log(circle.defaultLocation); // it returns the updated values
    console.log(circle.color)  // the local varriable that we made and  set to a string returned to be undefined. thus was not accessable from outside
    console.log(circle) // returns circle object and has the updated x and y values. 
    // thus so far 
    console.log(circle.color) // i'm calling color now that i've made a closure out of color
    console.log(circle.math) // does not return anything. it looks like our varriables set to premative in local scope are not accessable outside the object.

/// a CLOSURE is a piece of information that a function calls upon
// (at any point of the function; parameter or inside the function) that belongs to the outside scope. 
// a CLOSURE should not be confused with scope because a function has closure when it needs to rely on outside scope. 

/////what to look out for involving closures: 
// large scope lengths: everytime a varriable must be looked up you need to transverse up the scope chain to find the varriable. 
// 
// garbage collection: there are garbage collection languages. javascript is a garbage collected languages. it may cause problems for proformance and 
// memory leeks when developers don't understand the extend of garbage collection that is done and what to look out for. 
// understanding js memory leaks and how to spot and dignose them: 
// often caused by devs poor understanding of the garbage collector
// a memory leak occurs when you many no longer need a js object or varriable but the Js runtime may think you still do. it demenishes the proformance of 
// the app by reducing the amount of memory available for it to perform tasks. 
//
//the main concept in maemory management in JS is reachability...
//Simply put, “reachable” values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.
// There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.
//For instance:
//  Local variables and parameters of the current function.
//  Variables and parameters for other functions on the current chain of nested calls.
//  Global variables.
//  (there are some other, internal ones as well)
//  --these values are called roots.
//Any other value is considered reachable if it’s reachable from a root by a reference or by a chain of references.




////////////////////////// getters and setters //////////////
// there are techniquely two types of properties: Data properties and Accesor properties
// Data properties are the kinds we've been used to. Accessor properties are made with getters and setters
// acessor properties can not be deleted. 
// accesor properties have different attributes. 
//        they can have a get function -- a function with out an argument that works to make the value readable
//       a set function  -- a function that has to have one placeholder argument that makes the value re-writeable
//       be enumerable --- by default they are not iteratable with for in loops and object.each() but can be set with object.defineProperty()
//       and configuratble -- 
// accesor properties are created by functions initated with the the get and set keyword and you ditch the function keyword.
// if you console.log the object that contains the accessor property, it doesn't list the property as being inside the object. you have to 
// arrow down to see that it has a getter and setter in the console. and it won't show the code inside the function like it would a method. 
// getters are properties that call a hidden function (hidden from the object) to retrieve a value
// setters are properties which call a hidden function (hidden from the object) to set a value
//  

var myObj {
get a() {
    return 2
    }
}

myObj.a = 6;
console.log(myObj.a) // returns 2
console.log(myObj) // returns {}
// returns 2 is an acessor property with a getter function that doesn't have a setter funtion, so when we re-assign a it doesn't
// actually do anything, and the engine just silently throws it away with out giving us an error code. 
// it's recomended you always declare a setter with a getter. 

var myObject = {
	// define a getter for `a`
	get a() {
		return this._a_;
	},

	// define a setter for `a`
	set a(val) {
		this._a_ = val * 2;
	}
};

myObject.a = 2;
myObject.a; // 4
console.log{myObj} // returns { _a_: 4}


// when we assigned a key name in our getter and setter functions, it allowed for property to show up and under that name


///////more getters and setters
let user = {
    name: "joe",
    surname: "rogan",
 
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName is executed with the given value.
  user.fullName = "sydney jeffries";
  
  alert(user.name); // sydney
  alert(user.surname); // jeffries
  console.log(user); // shows the name and surname property but noit the getter and setters. 

  ////^^ here we changed the value of two object's properties at once by using the setter. 
//////////////more getters and setters /////

  //Getters/setters can be used as wrappers over “real” property values to gain more control over them.
  //For instance, if we want to forbid too short names for user, we can store name in a special property _name. And filter assignments in the setter:
  
   let user = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };
  
  user.name = "Pete";
  alert(user.name); // Pete
  
  user.name = ""; // Name is too short...
  //Technically, the external code may still access the name directly by using user._name and by this access you can still update it.. 
  //But there is a widely known agreement that properties starting with an underscore "_" are internal and should not be touched from outside the object.





////////////////////////////////exercise

function Timewatch () {
let startTime, endTime, running, durration = 0;

    this.reset = function() {

    }

    this.start = function (){
        if (running)
            throw new Error("stop watch is already running"); // running was undefined prior to running this method and chaning it' to true.
       
            running = true;
       
            startTime = new Date();
    }


    this.stop = function () {
        if(!running) 
            throw new Error('stopwatch is not started'); //you can not stop the watch when it's already stopped. when it's already stopped running will be false. 
       
            running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds; 
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        durration = 0; 
    }


   Object.defineProperty(this, 'duration', {
       get: function() {
           return duration
       });



};

///////////////////////////////     SECTION 3 inheritance     ////////////
// inhertiance in object orriented programing is used to reduce redundant code. 
/// inhertiance in typical obj ori langos is described as a parent passing down information to a child. 
///javascript has prototypical relationships. a parent is now called a prototype. it's not complicated
// when you acess a method or property on an object, JS engine first looks in that object directly for the property
// if the engine can't find the property in that object then it looks that the first prototype above that object, and 
// if it can't find it it looks above that protoype and all the way to the root object untill it finds the property. 
// in js, behind the scenes, every object in js belongs to a single prototype and they inherit all of the members from that single prototype.

let x = {
    cat: "hello"
  }

Object.getPrototypeOf(x);

// ^^ that's a way of checking the prototype of an object and viewing it's method and properties by typing that in console. 
// the same is achieveable if you enter x into the console and open the drop down, under the _proto will be the name of the prototype
// and anther drop down option to view that object's properties

//////////

// an array is also an reference object. all arrays belong to a single prototype that defeines the methods that arrays get to use (such as push, filter , ect)
// and that object is a child of the root object that all objects come from. (that doesn't really matter)



////////

let person = {
    name: "sydney", 
    age: 25,
     };
console.log(person);
for (let key in person)
    console.log(key);

   // ^^ iterates over our keys but doesn't itierate over the parent's keys // the window object keys are set to unenumerable b/c it's 
   // pursumed you wouldn't want to iterate over the window object's keys

   let person = {
    name: "sydney", 
    age: 25,
     };
   let objectbase = Object.getPrototypeoOf(person);
   let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
   console.log(descriptor);

    // Object.getOwnPropertyDescriptor(object, "propertykey"); checks a given object's property's attributes to see what they are set to.
   // you have to console log the method to see what it returns
   // i have not found a way to find this information on the console with out using this above console.logy routine
   // you will see a bunch of information that's set to be true/false that helps you evaluate that property
    //      configurable: true - means you can delete the member if you want to
    //       enumerable: true - means you can iterate over this method with the for..in loop and the object.each
    //       writeable: true - means you can overwrite the value of this method
    // by default all of these aer set to true
    // all of your object's data properties own these attributes and they are settable using: 

    let person = {name: "sydney",};
    Object.defineProperty(person, "name", {
        configurable: true,
        writable: false,
        enumerable: true,
    });
    person.name = "sid";      // when we tried to write over the property value it didn't return an error, it just didn't do it.
    console.log(person.name)  // returns "sydney"

    // the only way for someone to write-over property is to use the Object.defineProperty method over again.

////////////// prototype v. instant memebers  ////////////

function Circle (radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}
const c1 = new Circle(1);
const c2 = new Circle(2);

// when we do this the draw method will be coppied to both versions created out of the circle prototype. However, we can remove the draw method from them
// and still be able to acess the draw method from each child because the parent owns it . 
// to do this, we need to remove this.draw from the constructor function.
// when we remove it from the constructor function, we can add it  back to the parent object by       

   Circle.prototype.draw = function (){
        console.log('draw')
              }

// Circle.prototype (references the prototype object of all objects created by the constructor function) and we add a method by .draw and  define it
//....all this creates a single instance of the prototype method.
// this works b/c of the way the js engine looks at the children, then looks at the parents to find the instance of the property or method.
// we have two types of properties/ methods in JS: Instant members and prototype members


function Circle (radius) {
    // instant memebers
    this.radius = radius;
    
}

// prototype memeber
Circle.prototype.draw = function (){
    console.log('draw')
}

let shape = {}


Circle.prototype = shape;  // you can set the prototype with the prototype property 
// there is a different way to set prototype with obj lit syntax

const c1 = new Circle(1);
const c2 = new Circle(2);


// instant memebers have acess to prototype memebers.
// prototype memeberrs are either defined outside of the constructor function (w/ dot notation syntax) or  defined inside the parent obj
// instant memebers are more local, meaning the js engine looks at them first, so if the same member is defined in a prototype and an instant, but defined
// differently, the definition of the instant member will be used...



//////////////////////   iterating over instance and prototype memebers /////////
// object.keys() will turn an array with string entries of the key names given in the object.
// it ignoores unenumerable properties, symbols and prototyp memebers
// with the returned array, you can use the array methods and properties if you want to. 

object.keys(c1);
object.values(c1) // returns an array of all the "values"
object.entries(c1) // returns an array of the key, value pairs. 

//^^ object.keys only returns instant memebers draw will not show up in the array, b/c draw is a prototype memeber.


for (let key in c1)
    console.log(key);
        // returns all the key names of the object and it's prototype memebers that are enumerable and nonsymbols

//^^ the for in loop returns both prototype and instant memebers. 
// with the for..in loop you can create exclusions like the one we did with mosh. 
// the for..in loop does not return an areray, unless you have it do the push method on an array, then you can make it do that.
// but why would you do that when you have object.keys? maybe because you want to leave out certain data types, and create exceptions on
// what gets pushed out to the array. 
// for in loop was great for console.logging but because it doesnt operate in a predictable order...
 //the for..of loop combined with the object.kets/values/entries the would be way better suited for proforming action on
 // the entries in the object. 
// for proforming a series of code on the memebers. 
// instant memebers are also called own members. 


////////the for..of loop //// 
// the for..of loop iterates over iterable objects. 
// arrays and maps are by deafault iterable objects, but objects are not by default.
// to make an object an iterable object, you have give an object or one of it's prototypes the @@iterator key. 
// uncompleted.//
// for..of loop is great for iterating over an array. 





/////////////////////// exercise 2

function Timewatch () {
    let startTime, endTime, running, durration = 0;
    
        this.reset = function() {
    
        }
   
        Object.defineProperties(Timewatch, "startTime","endTime" ,"running", "durration" {    /// <-  this is also a form of abstraction
            writeable: false;
        });


       Object.defineProperty(this, 'duration', {
           get: function() {
               return duration
           };
           set: function(value){
               durration = value;
           });
    
    
};

    Timewatch.prototype.start = function (){
        if (this.running)
            throw new Error("stop watch is already running"); // running was undefined prior to running this method and chaning it' to true.
       
            this.running = true;
       
            this.startTime = new Date();
    }

    Timewatch.prototype.stop = function () {
        if(!this.running) 
            throw new Error('stopwatch is not started'); //you can not stop the watch when it's already stopped. when it's already stopped running will be false. 
       
            running = false;

        this.endTime = new Date();

        const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
        duration += seconds; 
    };

    Timewatch.prototype.reset = function() {
        this.startTime = null;
        this.endTime = null;
        this.running = false;
        this.durration = 0; 
    }

   
//////////////////////////////////section 3 prototpyical inheritance /////////////
// we want circle and shape objects to inherit certian methods from the shape object. 

 
function Shape() {}
function Circle() {}

// Prototypical inheritance 
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; 





///////////calling the super constructor ///
/// the .call() method belongs to all parent objcets. you use it so that the child can get acess to the prototype's methods
//inside the child that wishes to have the parent's properties, write Constructorfunction.call(thisArg, arg1, arg2, ...);
   
function Shape(color) {
    this.color = color; 
}

Shape.prototype.duplicate = function() {  // adding duplicate method to the prototype of shape
    console.log('duplicate')            // so that every instance created of the shape object won't include copies of this ..
                                        // method
}

function Circle(radius, color){ // add color to the arguments
  
    Shape.call(this, color);   //here we are calling the super constructor.
    // call is a method that takes the object that will recieve the property, and the key name. 

    this. radius = radius
}

Circle.prototype = Object.create(Shape.prototype); 
Circle.prototype.constructor = Circle; 


Circle.prototype.draw = function() {
    console.log('draw')
}

const s = new Shape();
const c= new Circle(1, "red"); // 1. here we are creating a new instance of the circle object. we want to give it a value to the color property, 
// but the color property is owned by the shape object. so we will have to make changes to our circle constructor function. 
// this change is kown as "calling the super constructor ". the word super can symbolizes the parent. 
c.draw();  // returns "draw" in the console




    //////////intermediate function inheritance //////

    //here we are making a function that will be called and passed argugments every time we want to set an object's prototype to shape.
    // 

    function Shape(color) {
        this.color = color; 
    }

    Shape.prototype.duplicate = function() { 
        console.log('duplicate')
    }

    function Circle(radius, color){ 
      
        Shape.call(this, color);  

        this. radius = radius
    }

    function extend(Child, Parent){                 //// here is our intermediate function inheritance. this way we can just pass arguments everytime we want to
    Child.prototype = Parent.create(Parent.prototype);   // asign a new object as a child to what ever prototype we want. 
    Child.prototype.constructor = Child;               /// its as good as a math equasion worth memorizing
    }

    Circle.prototype.draw = function() {
        console.log('draw')
    }

    extend(Circle, Shape);   ///here we call the intermediate function and create inhertance relationships. 
    extend(Square, Shape); //creating intermediate functions is for what's called "re-setting the prototypes"

    const s = new shape();
    const c= new circle(1, red); 




    /////////////method override //////
/// over ride a method that is defined in a base object - method over-riding. 



/////////////////polymorphism///////

///polymorphism in object orriented programing gets rid of long if and switch cases. it can bass a method thro inheritance and allows that child object
// to impliment that method in it's own way.
// when we incapselate properties in objects, annd use inhertiance on methods we are able to use polymorphism techniques 
// that allow child objects to impliment methods their own way and use For let loops on a method that belongs to the prototype,
// and it impliments all of versions of the methods (the child versions), that we would otherwise have to use switch statements to 
// do that. 

///////////////when to use inheritance ///////


///////mixin's achieve compisition which is favored over inheritance. //////////

function HtmlElement () {
    this.click = function (){
        console.log("click");
    }
}

HtmlElement.prototype.focus = function (){
    console.log('focused');
}


function HtmlElementSelector () {
    this.item = item || []; //if items is defined, use that, otherwise we use this empty array. 
   
    this.addItem = function(number) {
       this.item.push(number);
    }
 
    this.removeItem = function(number){
       this.item.pop(number);
    }
}

HtmlElementSelector.prototype = new HtmlElement(); // here we are setting the prototype of HTMLslector to the HTMLelement constructor
// b.c the constructor has acess to the instant memebers...and the prototype memebers because that one will link to the prototype of htmlelement. 
//this is setting the element to "inherit from the instance" of the htmlElement. 
HtmlElementSelector.prototype.constuctor = HTMLSelectElement;
// you have to reset the consturcor. 



////////////////////////////////exercise 2: polymorphism. ////////


function HtmlElement () {
    this.click = function (){
        console.log("click");
    }
}

HtmlElement.prototype.focus = function (){
    console.log('focused');
}


function HtmlElementSelector () {
    this.item = item || []; //if items is defined, use that, otherwise we use this empty array. 
   
    this.addItem = function(number) {
       this.item.push(number);
    }
 
    this.removeItem = function(number){
       this.item.pop(number);
    }

    this.render = function(...) {
    
    }
}

function HTmlImgElement (src,) {

    this.src = src ;
    
    this.render = function(src){
        return "<img src='" + this.src + "'/>"

    }

}


HtmlElementSelector.prototype = new HtmlElement(); // here we are setting the prototype of HTMLslector to the HTMLelement constructor
// b.c the constructor has acess to the instant memebers...and the prototype memebers because that one will link to the prototype of htmlelement. 
//this is setting the element to "inherit from the instance" of the htmlElement. 
HtmlElementSelector.prototype.constuctor = HTMLSelectElement;
// you have to reset the consturcor. 


HtmlImgElement.prototype = new HtmlElement();
HtmlImgElement.prototype.constuctor = HtmlImgElement;

const img = new HtmlImgElement();

img.src = "http";

const elements = [
    new htmlSelectElement([1,2,3]),
    new HtmlImgElement('https//'),
];

for (let element of elements)
    console.log(element.render());

    // the for...of statement creates a loop iterating over iterable objects, inlcuding: built in string, array, and array like objects

    // typedArray, map, set, and user defined iterables. it invokes a custom iteration hook with satements to be executed 
    // for the value of each distinct property of the object. 

    //variable
//On each iteration a value of a different property is assigned to variable. variable may be declared with const, let, or var.

let cat = {
    fakemethod: function() {
        console.log(this)
    },
}

//this is calling a method as a function call. 
let fakem = cat.fakemethod;
fakem();

/// how you can accidently alter the window object with a method that wassn't attended for the window object, before strict mode 
// before strict mode this would be profromed on the window object.
// strict mode does extra error checking...
//  one of it's features is to ensure that things arn't applied to the global object. 
