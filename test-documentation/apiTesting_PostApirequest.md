# apiTesting_PostApirequest.spec.js

## Test Case: Post Api request with dynamic body

This test validates the POST API request functionality using data from a JSON file in the booking system.

### Test Steps

1. **Create a booking (POST /booking)**
   - Uses data from the post_01_data.json file
   - Sends a POST request to create a new booking
   - Validates the response status code is 200
   - Validates the response contains a booking ID
   - Validates the booking details match the provided data

### Test Data

- Uses data from post_01_data.json file which contains:
  - First name ("Sally")
  - Last name ("Brown")
  - Total price
  - Deposit paid status
  - Booking dates
  - Additional needs

### Assertions

- Validates POST response status code is 200
- Validates booking ID is present in the response
- Validates first name and last name match the provided values
- Validates booking dates match the expected values

### Dependencies

- @playwright/test
- ../test_data/post_01_data.json
