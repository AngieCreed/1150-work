var x = 10;
// console.log(x);
document.getElementById("testParagraph").style.color = "blue";
console.log(document.getElementById("testParagraph").style.color);
console.log(document.querySelectorAll("p.sampleClass"));
// document.querySelectorAll("p.sampleClass")[0].innerHTML = "<span>I am a whole new element!</span>";
document.querySelectorAll("p.sampleClass")[0].innerHTML = "";
document.getElementById('clickThisButton').addEventListener('click', () => {
    console.log('I was clicked!');
});
    document.getElementById('clickThisButton').addEventListener('click', (details) => {
    console.log(details);
});
document.getElementById('clickThisButton').addEventListener('click', (details) => {
    details.target.style.backgroundColor = 'red';
})