let arr = [10, 20 , 30 , 40, 50]

let new_arr= arr.map(function(val){
    // console.log(12);
    return 12;
})

console.log('map: ',new_arr);

let new_arr2= arr.map(function(val){
    // console.log(12);

   if(val <= 30)
   {
      return true;
   }
})

console.log('filter : ', new_arr2);

// Step 1: Create an array containing product objects
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 100 }
];

// Step 2: Use map() to create a new array
let updatedProducts = products.map(function(product) {

    // Step 3: Calculate the new price
    let newPrice = product.price + (product.price * 10 / 100);

    // Step 4: Return a new object
    return {
        name: product.name,
        price: newPrice
    };
});

// Step 5: Display the new array
console.log(updatedProducts);