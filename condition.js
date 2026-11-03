    let age = "17";
    age = "18";

    if(age == "18")
    {
        console.log("you are enough to vote")
    }
    else if (age > "18")
    {
        console.log("you are too young and not able to vote");
    }

    else{
        console.log("error")
    }

// Largest of Three Numbers
// Write a program that finds the largest of three numbers a, b, c using if/else if.

let a = 12;
let b = 45;
let c = 30;

if (a > b && a > c) {
  console.log("a is the biggest");
} else if (b > a && b > c) {
  console.log("b is the biggest");
} else {
  console.log("c is the biggest");
}



// 5. Password Strength Checker
// Given a password's length, print:

// Length < 6 → "Weak"
// Length 6–10 → "Medium"
// Length > 10 → "Strong"

let password = "hello123world";

if (password.length < 6){

    console.log("weak password");

}

else if(password.length >= 6 && password.length <= 10)
{
    console.log("Medium ");
}

else if(password.length > 10)
{
    console.log("Strong");
}
else {
    console.log("Error");
}