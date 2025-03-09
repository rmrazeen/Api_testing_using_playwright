// Import necessary modules and data
import { test, expect } from '@playwright/test';
const postData = require('../test_data/post_01_data.json');
// Test suite for API testing
test.describe('API Testing', () => {
  test('Post Api request with dyanamic body', async ({ request }) => {
    // Send POST request to create a booking
    const postAPIresponse = await request.post('/booking', {
      data: postData
    });

    const responseBody = await postAPIresponse.json();
    console.log(responseBody);
    expect(postAPIresponse.status()).toBe(200);
    expect(responseBody).toHaveProperty('bookingid');
    expect(responseBody.booking).toHaveProperty('firstname', 'Sally');
    expect(responseBody.booking).toHaveProperty('lastname', 'Brown');
    expect(responseBody.booking.bookingdates).toMatchObject({ checkin: '2013-02-23', checkout: '2014-10-23' });
  });
});
