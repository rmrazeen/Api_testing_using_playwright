// Import necessary modules and data
import { test, expect } from '@playwright/test';
import { stringFormat } from "../utils/common";
import { faker } from '@faker-js/faker';
const postData = require('../test_data/post_dynamicBody.json');
const authToken = require('../test_data/auth_token.json');
const putData = require('../test_data/put_requestBody.json');


// Test suite for end-to-end API testing
test.describe('End-to-End API Testing', () => {
  test('Creating PUT API Request', async ({ request }) => {

    // Generate dynamic data for the POST request
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const additionalNeeds = 'Breakfast';
    const dynamicResponse = stringFormat(JSON.stringify(postData), firstName, lastName, additionalNeeds);

    // Send POST request to create a booking
    const postAPIresponse = await request.post('/booking', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.parse(dynamicResponse),
    });
  
    // Log the POST API response
    console.log(`===============POST API response====================`);

    const responseBody = await postAPIresponse.json();
    console.log(responseBody);

    const bookingId = responseBody.bookingid;
    expect(postAPIresponse.status()).toBe(200);
    expect(responseBody).toHaveProperty('bookingid');
    expect(responseBody.booking).toHaveProperty('firstname', firstName);
    expect(responseBody.booking).toHaveProperty('lastname', lastName);
    expect(responseBody.booking.bookingdates).toMatchObject({ checkin: '2013-02-23', checkout: '2014-10-23' });
  
    // Log the GET API request
    console.log(`===============GET API request====================`);
    const getAPIresponse = await request.get(`/booking/${bookingId}`);
    const getResponseBody = await getAPIresponse.json();
    console.log(getResponseBody);
    expect(getAPIresponse.status()).toBe(200);

    // Log the PUT API request
    console.log(`==============PUT API request====================`);

    // Send POST request to authenticate
    const authAPIresponse = await request.post('/auth', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: (authToken),
    });

    const authResponseBody = await authAPIresponse.json();
    console.log(authResponseBody);
    expect(authAPIresponse.status()).toBe(200);
    const token = authResponseBody.token;
    console.log(`Token no is:${token}`);

    // Send PUT request to update the booking
    const putAPIresponse = await request.put(`/booking/${bookingId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `token=${token}`
      },
      data: (putData),
    });
    const putResponseBody = await putAPIresponse.json();
    console.log(putResponseBody);
    expect(putAPIresponse.status()).toBe(200);


  });
});
