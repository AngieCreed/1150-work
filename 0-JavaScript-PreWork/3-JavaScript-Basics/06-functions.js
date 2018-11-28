//1     //2
function hello() {
    //3
    console.log("Hello World!");
}
hello();
hello();
hello();

function pacersWon() {
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

function numberEntered(x) {
    console.log("The number you entered was: ", x);
}
numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

function subtractTwoNumbers(firstNum, secondNum){
    console.log(secondNum - firstNum);
}
subtractTwoNumbers(5, 7);

function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    console.log(total);
    return total;
}
getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0);

function add(x, y){
    let sum = x + y;
    console.log(sum);
    return sum;
}
add(1, 1);

function fullName(first, last){
    var wholeName = first + " " + last;
    console.log(wholeName);
    return wholeName;
}
fullName("Paul", "O'Connor");

function petNameAndBreed(name, breed){
    var petDetails = name + ", " + breed;
    console.log(petDetails);
    return petDetails;
}
petNameAndBreed("Patty", "Black Lab Mix");

function taxOnProduct(quantity, price){
    var totalPrice = price * quantity * 1.07;
    console.log(totalPrice);
    return totalPrice;
}
taxOnProduct(17, 5);