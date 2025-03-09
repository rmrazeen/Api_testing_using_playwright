# apiTesting_getRquest.spec.js

## Test Case: Get API Request

This test validates the basic GET API request functionality in the booking system.

### Test Steps

1. **Create a booking (POST /booking)**
   - Uses static data for first name ("Ali") and last name ("Khan")
   - Uses static data for additional needs ("Breakfast")
   - Sends a POST request to create a new booking
   - Validates the response status code is 200
   - Validates the response contains a booking ID
   - Validates the booking details match the provided data
   - Stores the booking ID for subsequent requests

2. **Retrieve the booking (GET /booking/{id})**
   - Sends a GET request to retrieve the created booking by ID
   - Validates the response status code is 200

### Test Data

- Uses static data for first name ("Ali") and last name ("Khan")
- Uses static data for additional needs ("Breakfast")
- Uses the post_dynamicBody.json template for the request body

### Assertions

- Validates POST response status code is 200
- Validates booking ID is present in the response
- Validates first name and last name match the provided values
- Validates booking dates match the expected values
- Validates GET response status code is 200

### Dependencies

- @playwright/test
- ../utils/common (stringFormat function)
- ../test_data/post_dynamicBody.json
