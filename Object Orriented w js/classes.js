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
  //      enumerable: false;
 //   });

 //      or we'd  practice encapsilation and inheritance together by setting certain memebers to the instant and certain memebers to the prototype. 
//       previously we could also use get and set as a form of abstraction by using the master object's defineproperty method:
//  
    //    Object.defineProperty(this, 'duration', {
   //      get: function() {
 //           return duration
  //     };
 //          set: function(value){
  //          durration = value;
  //    });
//
//
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
    static parseFloat(str) {  // this is our abstracted memeber that we want to be only accessable when calling the Circle Class. 
                                /// it becomes similar to a prototyped method (only static method is what we call for class obj orr prog)

    }


    }


}



///////////////////// Private members in es6 ////////


//abstraction means hiding the details and complexity and showing only the necessary parts
// think of the buttons you see on the dvd player. that's all you see, the parts you can interact with, and the rest is behind the hood.
// (I was previously refering to abstraction as encapslation on this page when we were taking about static methods...
// ...  now i realise encapslation and abstraction are happening simutaniously and abstraction was the 
// concept that was at play.)

//how to impliment private properties and methods when using ES6 classes: 
// there are 2 approaches to implimenting private properties and methods with ES6 classes : using es6 symbols and es6 maps  

///////////using ES6 symbols for abstraction//////

// in js there are 2 ways to acess properties in an object : dot notation or brackets... as demonstarated the following two lines are exactly the same
//  this.radius = radius 
// this['radius'] = radius

//in es6 symbols are are new primative data type. ( prematives are booleans, numbers and strings)
// previously i've thought of abstraction as ; hiding properties and methods of an object from other coders so they can't over wright their values --creating privet properties
 // but here we expand on the purpose of abstraction as having the purpose of hiding the details and complexity and only showing the neccesary parts
// using es6 symbols for abstraction reminds me of encription because with encription you are using symbols to symbolize other words 
// and with es6 symbols you are symbolizing things with other words for the purpose of making your class object's code looking neater and simpler.
// when we check our object on chrome by typing it into the console, the symbolized character will be gone and it will show the real meaning behind the symbol. 
// symbols are used as keys in objects. 

const _radius = symbol();  // here we create the symbols by expressions. NOTE: the _ sytax 
const _draw = symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius;     //using a symbol to name a property
    }

    [_draw]() {                 /// using a symbol to name a method

    }
}

const c = new Circle(1);


/////////////////// using weak weekmaps in es6 to impliment privet properties and methods in an object//////
// symbols "kind-of" made properties "privet", but weakmaps will hide the properties from being seen when inspecting an instance of an object,
// and prevent the properties from being writen over acidently 
//  you IMPLIMENT THE WEAKMAP in the object WITH THE GET AND SET METHODS 
// and to obtain future acess to those privet properties, we make methods in our objects whose only purpose is to use the get method
// the get method retrieves the value of the property we created with the Weakmap();.



const _radius = new WeakMap(); 
const _move = new WeakMap();


class Circle {

    constructor (radius){
     _radius.set(this, radius);

     _move.set(this, ()=> {
        console.log('move', this) // here, this will refer to to the circle object as long as you use an arrow function 
     } )
    
    }

    draw() {
       _move.get(this)();     /// we had to put the (); at the end because _move is a method and we want' that method to execute after we get it.                         

    }

    getRadius() {
         _radius.get(this);    

    }

}

const c = new Circle(1);












////////////////////// Getters and setters /////
///getters and setters are a form of abstraction: with a getter method you can grab the value of the property for read only.
// you would then call the method to get a read on the value from your console. 
// we've previously used the get methods by writing the following inside an object constructor: 
//  Object.defineProperty(this, 'duration', {
 //   get: function() {
  //      return duration
  //  };
  ///// and this will give us a property we can read when we type the object name into our console and look at it's properties. 
// with es6 there are two new ways to get and set: 1. we make methods in our objects whose only purpose is to use the get method and acess that read only property 
// by calling thee get method. OR 2. use new es6 classes and new syntax with the get keyword and acess the value by calling on a property and NOT by calling a method. 
//  

//The SET method is powerful because we can thro vaildators with the set method. this way we can make sure that the value's are acceptable as deemed by the 
// vaildators. 
//es6 has a keyword for set and it works the same as the get keyword as discussed above
// the author says getters and setters are way easier with ES6 classes 


const _radius = new WeakMap();

 class Circle {
     constructor(radius) {

         _radius.set(this.radius)

     }

     getRadius(){
         return _radius.get(this);   // first way to get the value of read onlys 
     }

     get radius() {
         return _radius.get(this);  // 2nd way to get the value 
     }

     set radius(value) {
         if (value <= 0) throw new Error('invalid radius')
         return _radius.set(this, value);
     }


 }

 const c = new Circle(1); 

 c.getRadius() ; // this returns 1 and is part of the first way to get values
 c.radius ; // this returns the same thing but is part of the 2nd way to get the value
 c. radius = -1 // this will return our 'invalid radius' error. 





 /////////////////////////////Super Constructors and implimenting inheritance in es6 //////////
// if you want to create a child class in es6 you need the extends keyword and the super(); method. 
// all you have to do is when you want the class to be a child you write 
// extends then the parent while creating the child class. 
//with the extends keyword you don't have to redefine the constructor. 
// parent is the base class, child is the derived class. 
// if your base class has a constructor and if you want to create a constuctor in the child class you have to create in the derived class a...
//  Super Constructor first. 
/// in ES6 the super constructor is a method: super(); and you pass in the place holder parameter used in the parent class.


 class Shape {                           // "base class" aka parent
      Constructor(color, size) {
        this.color = color;
        this.size = size;
    }
    move() {
        console.log('move')
    }

 }

 class Circle extends Shape {             //"derived class" aka child created using the extends keyword
    constructor(color) {
        super(color, size);             //// This is the super constructor being used. 
        this.radius = radius;
    }

    draw() {
        console.log('draw');             // any method you declare outside of the constructor will be apart of the prototype memebers. 
    }
 }

 const c = new Circle('red', '5px', 1); // notice when you create an instance of the child class, you first pass in arguments that were devrived from the.. 
 // parent class ..



 ///////////////////////////////// Method OverRiding ////////////
// method Overriding is apart of the obj or polymorphism concept.
// polymorphism: you can pass a method thro inheritance and allow that child object to impliment that method it's own way. 
// we can proform method overriding the child method by redefining what the method does inside the devrived class.
// this works because when this method is called like c.move; JS engine looks at the child class to find that method first. 

class Shape {

    move() {
        console.log('move');
    }

}

class Circle extends Shape {
    move () {                       // this is method overRidng
    console.log('circle move');
    }

}
const c = new Circle();


////////using the super keyword://///
////imagine if we want the child's move method to impliment what the parent's move method does AND it's own additional steps...
// we would use the super keyword in the child's move method inorder to call the parent's move method and impliment everything the parent does..
//

class Shape {

    move() {
        console.log('move');
    }

}

class Circle extends Shape {
    move () {               
    super.move();                       // the super keyword used here takes the meaning of the devrived classes's  parent.  
    console.log('circle move');
    }

}
const c = new Circle();


/////////////////////////////Exercise //////////////
// a stack uses push to add and pop to remove.
// pop from the top
// the instance of the stack class  we create will have a count property. the count property will tell me how many objects are in the stack.
// it's imediate prototype will be an object class
// the prototype will have  3 methods: peek, pop and push
// peek will return the object to the top of the stack but it does not remove it from the stack. it allows us to see what's on top of the stack.
// we will get errors if we call pop and peek on empty stacks. 

/////////////////////////////Exercise //////////////
// a stack uses push to add and pop to remove.
// pop from the top
// the instance of the stack class  we create will have a count property. the count property will tell me how many objects are in the stack.
// it's imediate prototype will be an object class
// the prototype will have  3 methods: peek, pop and push
// peek will return the object to the top of the stack but it does not remove it from the stack. it allows us to see what's on top of the stack.
// we will get errors if we call pop and peek on empty stacks. 


const _items = new WeakMap();

class Stack {

constructor() {

    _items.set(this, []);

    get count() {
       return _items.get(this).length;
    }

    }
    
    push(obj) {
    
        _items.get(this).push(obj);

    }

    peek() { 
        const items = _ items.get(this);

        if (items.length === 0 )
         throw new Error('this stack is empty');

        return items.[items.length - 1 ];

    }

    pop(){
        const items = _ items.get(this);

        if (items.get(this).length === 0 )
            throw new Error ('stack is empty')
        return items.get(this).pop()

    }

}