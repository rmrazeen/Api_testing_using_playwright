# apiTesting_endToEnd.spec.js

## Test Case: Creating Delete API Request

This test validates the end-to-end API flow including DELETE operation in the booking system.

### Test Steps

1. **Create a booking (POST /booking)**
   - Generates dynamic data using faker library
   - Sends a POST request to create a new booking
   - Validates the response status code is 200
   - Validates the response contains a booking ID
   - Validates the booking details match the provided data
   - Stores the booking ID for subsequent requests

2. **Retrieve the booking (GET /booking/{id})**
   - Sends a GET request to retrieve the created booking
   - Validates the response status code is 200

3. **Authenticate (POST /auth)**
   - Sends a POST request to authenticate and obtain a token
   - Validates the response status code is 200
   - Extracts the authentication token for subsequent requests

4. **Update the booking (PATCH /booking/{id})**
   - Sends a PATCH request with the authentication token
   - Uses data from the Patch_data.json file
   - Validates the response status code is 200

5. **Delete the booking (DELETE /booking/{id})**
   - Sends a DELETE request with the authentication token
   - Validates the response status code is 201

### Test Data

- Uses dynamic data generated with faker.js for first name and last name
- Uses static data for additional needs ("Breakfast")
- Uses the post_dynamicBody.json template for the request body
- Uses auth_token.json for authentication
- Uses Patch_data.json for the PATCH request body

### Assertions

- Validates POST response status code is 200
- Validates booking ID is present in the response
- Validates first name and last name match the provided values
- Validates booking dates match the expected values
- Validates GET response status code is 200
- Validates authentication response status code is 200
- Validates PATCH response status code is 200
- Validates DELETE response status code is 201

### Dependencies

- @playwright/test
- @faker-js/faker
- ../utils/common (stringFormat function)
- ../test_data/post_dynamicBody.json
- ../test_data/auth_token.json
- ../test_data/Patch_data.json
