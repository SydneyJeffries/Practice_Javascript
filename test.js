"use strict"

const _radius = symbol(); // here we create the symbols by expressions. NOTE: the _ sytax 
const _draw = symbol();
    

class Circle {
    
   
    
    constructor(radius) {
     
        this[_radius] = radius;     //using a symbol to name a property
    }

    [_draw]() {                 /// using a symbol to name a method

    }



}


const c = new Circle(1);

c[_radius] = 1;