// console.log('Hello');
// console.log('I like pizza');


// window.alert('This is an alert!');
// window.alert('I like pizza');

//this is a comment 
/*
this is a multiple line comment */

// document.getElementById("myH1").textContent="hello";
// document.getElementById("myP").textContent="I like pizza";



// let age= 25;
// let price = 10.00;
// let gpa= 2.1;
// console.log(typeof gpa);
// console.log(`you are ${age} years old`);
// console.log(`the price is $${price}`);

// console.log(`your gpa is ${gpa}`);

// let firstName= "vaish";
// let favFood= "Pizza";

// console.log(typeof firstName);

// console.log(`your name is ${firstName}`);
// console.log(`my fav food is ${favFood}`);

// let username;
// username = window.prompt("Whats your username");
// console.log(username);

// const PI = 3.14;
// let radius;
// let circumference;



// document.getElementById("mysubmit").onclick = function(){
//     radius=document.getElementById("myText").value;
//     radius=Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = circumference;

// }

const DecreaseBtn = document.getElementById("DecreaseBtn");
const ResetBtn = document.getElementById("ResetBtn");
const IncreaseBtn = document.getElementById("IncreaseBtn");

const countLabel = document.getElementById("countLabel"); 
let count = 0;

IncreaseButton.onclick = function() {
    count++;
    countLabel.textContent = count; 
};
 

DecreaseBtn.onclick = function (){
    count--;
    countLabel.textContent=count;
}

ResetBtn.onclick = function(){
    count=0;
    countLabel.textContent=count;

}

