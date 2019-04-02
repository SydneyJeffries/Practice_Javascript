//////////////////////////// modules /////////////////
// modules are good for maintainability, to reuse code, and to practice abstraction. 
///

const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
}

draw() {
    console.log('circle with radius' + _radius.get(this));

}
}

const c = new Circle(10);
console.log(_radius.get(c)) // here this explains how to get value from weakmap is:  _radius.get(c)
    // returns 10 
c.draw();


/// our next steps are to remove the weakmap and circle class and put it into it's own file called a module. 
// but when we create the module (move the said stuff over to anther file). we will no longer have access to the weakmap from this file. 


// the author says from here on out our focus will be on common JS and es6 modules. 

////////////////////////// Common JS Modules ////////////
// common js mudles are used with Node.js