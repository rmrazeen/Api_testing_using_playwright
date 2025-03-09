// Import necessary modules and data
import { test, expect } from '@playwright/test';
import { stringFormat } from "../utils/common";
const postData = require('../test_data/post_dynamicBody.json');

// Test suite for API testing
test.describe('API Testing', () => {
  test('Get API Request', async ({ request }) => {

    // Generate dynamic data for the POST request
    const firstName = 'Ali';
    const lastName = 'Khan';
    const additionalNeeds = 'Breakfast';
    const dynamicResponse = stringFormat(JSON.stringify(postData), firstName, lastName, additionalNeeds);

    // Send POST request to create a booking
    const postAPIresponse = await request.post('/booking', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.parse(dynamicResponse),
    });

    const responseBody = await postAPIresponse.json();
    console.log(responseBody);

    const bookingId = responseBody.bookingid;
    expect(postAPIresponse.status()).toBe(200);
    expect(responseBody).toHaveProperty('bookingid');
    expect(responseBody.booking).toHaveProperty('firstname', firstName);
    expect(responseBody.booking).toHaveProperty('lastname', lastName);
    expect(responseBody.booking.bookingdates).toMatchObject({ checkin: '2013-02-23', checkout: '2014-10-23' });
  
    // Log the GET API request
    console.log(`==================================`);
    const getAPIresponse = await request.get(`/booking/${bookingId}`);
    const getResponseBody = await getAPIresponse.json();
    console.log(getResponseBody);
    expect(getAPIresponse.status()).toBe(200);
  });
});
