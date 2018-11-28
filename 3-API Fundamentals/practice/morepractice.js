function fullName(first, last){
    return first + ' ' + last
}
console.log(fullName("Carolyn", "Harris"))

//return
//last thing in a function - nothing under return runs
// can call in global scope
//get things outside of the function so we can use it elsewhere
//can only have one return
//each function can have its own return

let fullName = (first, last) => first + '' + last
console.log(fullName("Carolyn ", "Harris"))

// if its only one line with arrow functions - more than one line we do
// return is implied
// one line arrow functions - dont need furly braces or return

//Alternatives to doing for loops
// loops are convenient for repetetetive tasks - but ES6 introduced better
// ways of iterating over arrays

//Map
// allows us to do the same action on every item in an array
//The map() method creates a new array with the results of calling a provided function on every element in the calling array.

let numbers = [1,2,3,4,5,6,7,8,9,10]
let biggerNumbers = numbers.map(number => number * 4)
console.log(biggerNumbers)
//1.make a new variable to store array in
// oldarray.map(a name => what we want to do to each item)

//Challenge
//create an array of strings that are lower case
// using map create a new array with the same strings all in uppercase

let array = ["angie", "brent", "blake", "cole"]
let newArray = array.map(array1 => array1.toUpperCase())
console.log(newArray)

//filter - go through an array and only return items that match our condition
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

let numbers = [1,2,3,4,5,6,7,8,9,10]
let oddsOnly = numbers.filter(number => number % 2 !== 0)
console.log(oddsOnly)
console.log(numbers)

let names = ["Tom", "Carol", "Kenn", "Tyler", "David", "Paul", "Aleck"]
let shortNames = names.filter(name => name.length <= 4)
console.log(shortNames)

let favoriteSuperheroes = [
    {name: "Wonder Woman", universe: "DC"},
    {name: "Loki", universe: "Marvel"},
    {name: "Aquaman", universe: "DC"},
    {name: "Black Widow", universe: "Marvel"},
    {name: "Thor", universe: "Marvel"},
    {name: "Hawkeye", universe: "Marvel"},
    {name: "Doctor Strange", universe: "Marvel"},
    {name: "The Flash", universe: "DC"},
    {name: "Scarlet Witch", universe: "Marvel"}
  ]

  let marvel = favoriteSuperheroes.filter(names => names.universe === 'Marvel')
  console.log(marvel)
  
