/* The constructor method is a special method that helps create and initialize an object created from a class. It works in tandem with the new keyword.*/

class User {
    //We call the constructor function and create parameters.
    //These will be values that we want to be passed in and stored in the object.
    constructor(first, last, e) {
                //On the right side of these expressions, the word 'first', 'last', and 'e' below, 
                //we have the value that is getting passed into the parens when the object is created.
                // vvv
        this.f = first;
        this.l = last;
        this.email = e;
        //^^^^^^^^ 
        //On the right side we have the actual properties of the object. 
        //The left side stores the incoming value from the right side as 
        //the property for 'this' specific object being created. 
    }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first);
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne);

/* output
undefined
Paul
O'Connor
User { f: 'Paul', l: 'O\'Connor', email: 'poconnor@elevenfifty.org' } */