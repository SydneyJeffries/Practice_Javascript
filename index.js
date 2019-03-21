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



//value types vrs. reference types
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

let x = { value: 10 };
let y = x

x.value = 20;

//^^^ when x is an object and not a premitive varriable, like the last senerio, the value of y returns as the updated x value. 
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
// this proves how the The varriables are independant because  the value does not update 

let number = {value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // the value will return as 11

// ^^this is because when an object's values change any reference to that object's value also imediately changes. ( because of teh whole refrence to reference thing)

//premitives are copied by their value
//objects are coppied by their reference 


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

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

for (let key in circle) {
    if (typeof circle[key] !== "function")
    console.log(key, circle[key]);
}

// ^^ using a for in loop,  here it iterated over all the properties in the circle except for the method because we included an if statement exluding the methods. 


if('radius' in circle) {
    console.log('circle has a radius')
}

// ^^ use the if in method to check to see if an object has a property or method and follow up with code if it does. 

function Circle(radius){

let color = "red" // <-- is not a property of an object b/c it's not set with this. this.color = red is a property.
// this is only a local varriable inside the function. 

this.radius = radius

let  defaultLocation = { x: 0, y: 0} // it was this.defaultLocation = {x:0 y: 0} but we changed it to be a local object and it's now not accessable
// outside of this object. This is abstraction in practice. By doing this we make our interface of the object simpler and reduce the impact of changing 
// the values. Because now we'd only have to update the value every time it's seen in the object and not everywhere in our code. 

this.computerOptimunLocation = function() {
    //
    }
this.draw = function() {
    computerOptimunLocation;
    console.log('draw');

    }
}

const circle = new Circle(10);
circle.draw();

/// a CLOSURE is a piece of information that a function calls upon
// (at any point of the function; parameter or inside the function) that belongs to the outside scope. 


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

///////////////////////// SECTION 3 inheritance
// inhertiance in object orriented programing is used to reduce redundant code. 
/// inhertiance in typical obj or langos is described as a parent passing down information to a child. 
///javascript has prototypical relationships. a parent is now called a prototype. it's not complicated
// when you acess a method or property on an object, JS engine first looks in that object directly for the property
// if the engine can't find the property in that object then it looks that the first prototype above that object, and 
// if it can't find it it looks above that protoype and all the way to the root object untill it finds the property. 
// in js, behind the scenes, every object in js belongs to a single prototype and they inherit all of the members from that single prototype.

Object.getProtoTypeOf(x);

// ^^ that's a way of checking the prototype of an object and viewing it's method and properties by typing that in console. 


//////////

// an array is also an reference object. all arrays belong to a single prototype that defeines the methods that arrays get to use, and 
// that object is a child of the root object that all objects come from. 


////////

let person = {name: "mosh"};
console.log(person);
for (let key in person)
    console.log(key);

   // ^^ iterates over our keys but doesn't itierate over the parent's keys

   let person = {name: "mosh"};
   let objectbase = Object.get PrototypeoOf(person);
   let descriptor = Object.getOwnPropertyDescriptor (objectBase, "toString");
   console.log(descriptor);
   
   // when you look at the console and evaluate the property descriptor of the toString property that belongs to the root object,
   // you will see a bunch of information that's set to be true/false that helps you evaluate that property
    // configurable: true - means you can delete the member if you want to
    // enumerable: false - means you can't iterate over this method and prevent's it from showing up when you call to see the keys
    // writeable: true - means you can overwrite the value of this method
    // ^^ these are the "Attributes" attached to the toString Method
    // all of your object's propertys own these attributes and they are settable using: 

    let person = {name: "mosh"};
    object.defineProperty(person, "name", {
        configurable: false;
        writeable: false;
    });

///// prototype v. instant memebers

function Circle (radius) {
    this.radius = radius;
    this.draw = function (){
        console.log('draw')
    }
}
const c1 = new Circle(1);
const c2 = new Circle(2);

// when we do this the draw method will be coppied to both versions created out of the circle prototype. However, we can remove the draw method from them
// and still be able to acess the draw method from each child because the parent owns it . 
// to do this, we need to remove this.draw from the constructor function.
// when we remove it from the constructor function, we can add it  back to the parent object by          Circle.prototype.draw = function (){
    //                                                                                                                    console.log('draw')
 //                                                                                                                            }
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


const c1 = new Circle(1);
const c2 = new Circle(2);


// instant memebers have acess to prototype memebers. prototype members have access to instant memebers.
// prototype memeberrs are either defined outside of the constructor function (w/ dot notation syntax) or  defined inside the parent obj
// instant memebers are more local, meaning the js engine looks at them first, so if the same member is defined in a prototype and an instant, but defined
// differently, the definition of the instant member will be used...

//////////iterating over instance and prototype memebers

object.keys(c1));

//^^ object.keys only returns instant memebers draw will not show up in the array, b/c draw is a prototype memeber.

for (let key in c1)
    console.log(key);

//^^ the for in loop returns both prototype and instant memebers. 

// instant memebers are also called own members. 

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

   

    ///////////////////////////////////////section 3