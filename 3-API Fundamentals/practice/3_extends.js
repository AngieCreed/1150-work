class User {
    constructor(name) {
        this.name = name;
        this.type - "Trial User"
    }

    greet() {
        console.log("Welcome back, " + this.name);
    }

    status() {
        console.log("Current status: " + this.type);
    }
}
//Extends
class TrialUser extends User {
    trialEnding() {
    console.log("Your trial will be ending soon, " + this.name + '.' + ' Would you like to join our program?'); 
    }
    /* So, when we use the extends keyword, we are doing something that we, again, call subclassing. This means that the TrialUser class becomes a child of User, and therefore inherits all of its functions and properties.

    You should also note that TrialUser has a trialEnding method, something that User won't have. This means that a child class can have its own separate methods. */
}

//Instance of User class
var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

//instance of TrialUser class
var trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();


//ES6 JS Classes
class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }

//Method 1
greet() {
    console.log("Welcome back, " + this.name);
}

//Method 2
status() {
    console.log("Current status: " + this.type);
}

}

//Instance of the class/new object
var anonDude = new User("Anonymous dude");

//we can now use the instance and the . operator
//to access the 2 methods
anonDude.greet();
anonDude.status();

//Another instance of the class
var anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

//Another instance of the class
var jeff = new User("Jeff");
jeff.greet();
jeff.status();

// Here are a couple things to note: 1. We have three different instances of the User class. Three different cookies. 2. The . operator allows each instance of the class to 'access' the methods(functions) in the class. 3. Each instance has a different result in the console based on the string that is passed in to the constructor. Let's clarify that in the next module. 4. Before you move on, see if you can create 2 new instances of the class from memory.