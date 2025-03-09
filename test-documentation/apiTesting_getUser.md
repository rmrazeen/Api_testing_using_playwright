# apiTesting_getUser.spec.js

## Test Case: Post User with Static Body

This test validates the POST API request functionality with a static request body in the booking system.

### Test Steps

1. **Create a booking (POST /booking)**
   - Uses a static request body with predefined values
   - Sends a POST request to create a new booking
   - Validates the response status code is 200
   - Validates the response contains a booking ID
   - Validates the booking details match the provided data

### Test Data

- Uses static data for first name ("Sally") and last name ("Brown")
- Uses static data for total price (111)
- Uses static data for deposit paid (true)
- Uses static data for booking dates (checkin: "2013-02-23", checkout: "2014-10-23")
- Uses static data for additional needs ("Breakfast")

### Assertions

- Validates POST response status code is 200
- Validates booking ID is present in the response
- Validates first name and last name match the provided values
- Validates booking dates match the expected values

### Dependencies

- @playwright/test
