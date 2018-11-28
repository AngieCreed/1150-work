var add = function(x, y){
    return x + y;
}

var add = (x, y) => x + y;

var func = x => x * x;

var func = (x, y) => { return x + y; };

let greetUser = username => `Hello, ${username}!`;

let greetUserSecondVersion = username => { return `Hello ${username}!` };
console.log(greetUser('Kenn') === greetUserSecondVersion('Kenn')); // true

var hello = () => {
    console.log("Hello React");
}