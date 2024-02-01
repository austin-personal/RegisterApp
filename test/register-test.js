const axios = require('axios');

// Assuming your environment supports ECMAScript modules
async function loadChai() {
  // Import the 'expect' function from the 'chai' module using dynamic import
  const { expect } = await import('chai');
  
  // Use 'expect' here

  // Example usage:
  const response = await axios.post('http://localhost:3000/register', {
    name: 'AWS Cloud Club',
    gender: 'Other',
  });
  console.log(response.status);

  // Assert that the HTTP response status is equal to 200 using 'expect'
  expect(response.status).to.equal(200);
  // Add more assertions as needed
}

// Call the async function
loadChai();
