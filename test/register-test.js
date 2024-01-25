// Use dynamic import
const { expect } = import('chai');

const axios = require('axios');

describe('Registration Functionality', () => {
  it('should register a user successfully', async () => {
    const response = await axios.post('http://localhost:8080/register', {
      name: 'TestUser',
      gender: 'Male',
    });

    expect(response.status).to.equal(200);
    // Add more assertions as needed
  });
});
