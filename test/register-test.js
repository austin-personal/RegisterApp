import { expect } from 'chai';
import axios from 'axios';

describe('Registration Functionality', () => {
  it('should register a user successfully', async () => {
    const response = await axios.post('http://localhost:8080/register', {
      name: 'AWS Cloud Club',
      gender: 'Other',
    });
    console.log(response.status)
    expect(response.status).to.equal(200);
    // Add more assertions as needed
  });
});
 