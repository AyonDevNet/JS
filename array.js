let fruits = ["Apple", "Banana", "Mango"];
fruits.push("straw-berrry"); // add from last
fruits.pop("straw-berry"); //delete from the last
fruits.unshift("grapes"); //add in the first
fruits.shift("grapes") // remove from first
console.log(fruits.indexOf("Apple"));
console.log(fruits.length)
fruits.splice(1, 2);

// fruits.reverse()
// Remove elements using splice()
fruits.splice(1, 2);

console.log(fruits);
// add element , 3 no a boshbe but , 2 index er por
fruits.splice(3, 2, "Graps");

//Replace elements using splice()
fruits.splice(1, 1, "jack-fruits");

console.log(fruits);
console.log(fruits);
console.log(fruits);

fruits.sort()	//Sorts alphabetically