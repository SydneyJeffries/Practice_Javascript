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