# apiTesting_PostRequest.spec.js

## Test Case: Post API Request Using Dynamic Random Info

This test validates the POST API request functionality using dynamically generated random data in the booking system.

### Test Steps

1. **Create a booking (POST /booking)**
   - Generates dynamic data using faker library for first name and last name
   - Generates dynamic dates using luxon library for check-in and check-out
   - Generates a random total price
   - Sends a POST request to create a new booking
   - Validates the response status code is 200
   - Validates the response contains a booking ID
   - Validates the booking details match the provided data

### Test Data

- Uses dynamic data generated with faker.js for first name and last name
- Uses dynamic dates generated with luxon library:
  - Check-in date: current date + 1 day
  - Check-out date: current date + 5 days
- Uses random total price between 100 and 1000
- Uses static data for deposit paid (true)
- Uses static data for additional needs ("Breakfast")

### Assertions

- Validates POST response status code is 200
- Validates booking ID is present in the response
- Validates first name and last name match the provided values
- Validates booking dates match the expected values

### Dependencies

- @playwright/test
- @faker-js/faker
- luxon (DateTime)
