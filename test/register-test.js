const { expect } = import('chai');

const axios = require('axios');

describe('Registration Functionality', () => {
  it('should register a user successfully', async () => {
    const response = await axios.post('http://localhost:3000/register', {
      name: '최효정',
      gender: 'Female',
    });
    console.log(response.status)
    expect(response.status).to.equal(200);
    // Add more assertions as needed
  });
});
