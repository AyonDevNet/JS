// 🟢 Beginner

// 1. Fix this code so it runs without error, then predict the output:

var x = 5;
var x = 10;
console.log(x);


// . What will this print?

// javascript
let a = 1;
a = a + 1;
a = a + 1;
console.log(a);
//answer : 3

// 3. Will this throw an error? If yes, why?
// const num;
// num = 5;
// console.log(num);
//we did not intial any variable of num


// 4. Predict the output:
const student = { name: "Rahim", marks: 80 };
student.marks = 90;
student.grade = "A";
console.log(student);
// No error here! This works perfectly fine. 
// Remember: const only locks the variable from pointing to a different object — 
// it doesn't stop you from adding, removing, or editing properties inside the object.


// 5. Predict the output (this one's tricky — think about scope):

function test() {
  if (true) {
    var a = 1;
    let b = 2;
  }
  console.log(a);
  console.log(b);
}
test();

//for me it show me 1,2 but it does not show the output,,
//condition is always true and it should be give me answer but i donot know why it is not give me the answer

const fruits = ["apple", "banana"];
fruits[0] = "mango";
console.log(fruits);
// fruits[0] means "the value at position 0." Setting it replaces whatever was there — it doesn't shift things over or insert.

// Actual output:

// javascript
// ["mango", "banana"]

// ("apple" is gone — overwritten, not pushed aside.)






//8. Find the bug:
const user = { name: "Karim" };
function updateUser() {
  user = { name: "Ayon" };
}
updateUser();
console.log(user);

//here it should be add the vaule like, user.name = "Ayon";


// 9. Write code that:

// Declares a const object book with properties title and price
// Updates only the price to a new value
// Then attempts to reassign book to a completely new object — and explain what will happen

const book = {title : "Berserk" , price : "1000" };
book.price = "2000";
// if i am goin reassign object, without initialize it will throw error
// book = { title: "New Title", price: "500" }; // ❌ TypeError — reassigning the const itself