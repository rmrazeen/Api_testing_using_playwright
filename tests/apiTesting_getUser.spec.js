// Import necessary modules and data
import { test, expect } from '@playwright/test';

// Test suite for API testing
test.describe('API Testing', () => {
  test('Post User with Static Body', async ({ request }) => {
    // Send POST request to create a booking
    const postAPIresponse = await request.post('/booking', {
      data: {
        "firstname": "Sally",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2013-02-23",
          "checkout": "2014-10-23"
        },
        "additionalneeds": "Breakfast"
      }
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
