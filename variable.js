var name = 'Ayon';
var name = 'rahim';
var name = 'Alice'
console.log(name);

var city = "Dhaka";
console.log(city); // "Dhaka"
//** var we can use as global variable */
var city = "Chittagong"; // redeclared — same variable, new value
console.log(city); // "Chittagong"

var city = "Sylhet"; // redeclared again
console.log(city); // "Sylhet"

// Notice the keyword var appears three times, each time with the same name city.
//  JavaScript doesn't throw an error — it just treats each one as 
// "okay, update city to this new value."


// Now watch let refuse to do this
// let city = "Dhaka";
// let city = "Chittagong"; // ❌ SyntaxError: Identifier 'city' has already been declared


let number = '1234';
console.log(number);
number = '56789'
console.log(number);
//if you have the write let num and without let, num, it allows to you update the number
//but it is not allow to change the varible with another let.


//const

const SpecialNumber = '232323';
// SpecialNumber ='232323';  //this throw error, becuase of the const doesnot allow to change this
// console.log(SpecialNumber);

// but  there are the special case which is objects and arrays are a special case ⚠️

const person = { name: "Ayon", age: 20 };

person.age = 21;        // ✅ this WORKS! No error!
console.log(person);    // { name: "Ayon", age: 21 }

// const not allow to you change the variable but it allows to change the vlaue of the variable

const person2 = { name: "karim" };
// person = { name: "Karim" }; // ❌ ERROR — you're trying to replace the whole box
person2.name = "Ayon";
console.log(person2);


//same as Array 
const numbers = [1, 2, 3];
numbers.push(4);       // ✅ works — [1, 2, 3, 4]
numbers = [5, 6, 7];    // ❌ error — can't reassign the variable itself


// 4. Predict the output:
const student = { name: "Rahim", marks: 80 };
student.marks = 90;
student.grade = "A";
console.log(student);
// No error here! This works perfectly fine. 
// Remember: const only locks the variable from pointing to a different object — 
// it doesn't stop you from adding, removing, or editing properties inside the object.




// TDZ temporary dead zone

console.log(city); // ❌ ReferenceError: Cannot access 'city' before initialization

let city = "Dhaka";
console.log(city); // "Dhaka" ✅