/////This is a doc from a class I took on Udmey with instructor Mosh Hamedani on Object orriented programing in Javascript. 


//////////////section 5 es6 classes ////////////

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
