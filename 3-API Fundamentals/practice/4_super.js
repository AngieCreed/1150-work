/*The purpose of the super() function in a constructor is important to know, especially for React developers. To start out, it's best to go to the MDN docs and take a look. Take a quick scan and come back. */

//he super keyword is used to access and call functions on an object's parent.
/* When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. The super keyword can also be used to call functions on a parent object.*/

class User {
    constructor(username, password) {
        this.name = username;
        this.password = password;
        this.type = "Trial User"
    }

    greet() {
        console.log("Welcome back, " + this.name);
    } 

    status() {
        console.log("Current status: " + this.type);
    }

}

//Instance of the class/new object
var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

class BronzeLevelUser extends User {
    constructor(username, password, ccinfo) {
        super(username, password, ccinfo)
        this.type = "Bronze User";
        this.ccinfo;
    }
    getInfo() {
        console.log(this.usuername, this.password, this.type, this.ccinfo);
    }
}

var bronzeGuy = new BronzeLevelUser("Bronze Dude", "bronze7589", "3234234)");
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);