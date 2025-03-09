// Import necessary modules and data
import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { DateTime } from 'luxon';

// Test suite for API testing
test.describe('API Testing', () => {
  test('Post API Request Using Dynamic Random Info', async ({ request }) => {
  
    // Generate dynamic data for the POST request
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const checkInDate = DateTime.now().plus({ days: 1 }).toFormat('yyyy-MM-dd');
    const checkOutDate = DateTime.now().plus({ days: 5 }).toFormat('yyyy-MM-dd');
    const totalprice = faker.number.int({ min: 100, max: 1000 });

    // Send POST request to create a booking
    const postAPIresponse = await request.post('/booking', {
      data: {
        "firstname": firstName,
        "lastname": lastName,
        "totalprice": totalprice,
        "depositpaid": true,
        "bookingdates": {
          "checkin": checkInDate,
          "checkout": checkOutDate
        },
        "additionalneeds": "Breakfast"
      }
    });

    const responseBody = await postAPIresponse.json();
    console.log(responseBody);

    expect(postAPIresponse.status()).toBe(200);
    expect(responseBody).toHaveProperty('bookingid');
    expect(responseBody.booking.firstname).toBe(firstName);
    expect(responseBody.booking.lastname).toBe(lastName);
    expect(responseBody.booking.bookingdates).toMatchObject({ checkin: checkInDate, checkout: checkOutDate });

  });
});
