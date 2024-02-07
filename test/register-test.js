var expect = require('chai').expect;
const axios = require('axios');

describe('Registration Functionality', () => {
  it('should register a user successfully', async () => {
    try {
      const response = await axios.post('http://localhost:8080/register', {
        name: 'AWS Cloud Club',
        gender: 'Other',
      });
      console.log(response.status);
      expect(response.status).to.equal(200);
    } catch (error) {
      // Handle errors, log them, or fail the test if necessary
      console.error('Error during registration:', error.message);
      throw error; // Fail the test
    }
  });
});