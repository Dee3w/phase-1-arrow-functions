// index.js
  

// Arrow function - square
const square = (num) => {
    return num * num;
  };
  
// Arrow function - add
const add = (a, b) => {
    return a + b;
  };


// Function expression
const divide = function(a, b) {
    return a / b;
  };
  
  // Call the divide function
  const result = divide(2000, 100);
  console.log(result); 
  
  const squaredResult = square(result);
console.log(squaredResult); // Output: 400
  

// Call the add function
const sum = add(10, 5);
console.log(sum); // Output: 15