# apiTesting_GetAPIRequest.spec.js

## Test Case: Query Params and Get API Request

This test validates the GET API request functionality with query parameters in the booking system.

### Test Steps

1. **Create a booking (POST /booking)**
   - Uses static data for first name ("Razeen") and last name ("Khan")
   - Uses static data for additional needs ("Breakfast")
   - Sends a POST request to create a new booking
   - Validates the response status code is 200
   - Validates the response contains a booking ID
   - Validates the booking details match the provided data
   - Stores the booking ID for subsequent requests

2. **Retrieve bookings with query parameters (GET /booking?firstname=X&lastname=Y)**
   - Sends a GET request with query parameters for first name and last name
   - Validates the response status code is 200

### Test Data

- Uses static data for first name ("Razeen") and last name ("Khan")
- Uses static data for additional needs ("Breakfast")
- Uses the post_dynamicBody.json template for the request body

### Assertions

- Validates POST response status code is 200
- Validates booking ID is present in the response
- Validates first name and last name match the provided values
- Validates booking dates match the expected values
- Validates GET response with query parameters status code is 200

### Dependencies

- @playwright/test
- ../utils/common (stringFormat function)
- ../test_data/post_dynamicBody.json
