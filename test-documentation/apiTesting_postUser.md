# apiTesting_postUser.spec.js

## Test Case: Post User with Dynamic JSON File

This test validates the POST API request functionality using a dynamic JSON file with string formatting in the booking system.

### Test Steps

1. **Create a booking (POST /booking)**
   - Uses static data for first name ("Ali") and last name ("Khan")
   - Uses static data for additional needs ("Breakfast")
   - Uses the stringFormat utility to inject dynamic values into the JSON template
   - Sends a POST request to create a new booking
   - Validates the response status code is 200
   - Validates the response contains a booking ID
   - Validates the booking details match the provided data

### Test Data

- Uses static data for first name ("Ali") and last name ("Khan")
- Uses static data for additional needs ("Breakfast")
- Uses the post_dynamicBody.json template for the request body, which contains placeholders:
  - {0} for first name
  - {1} for last name
  - {2} for additional needs

### Assertions

- Validates POST response status code is 200
- Validates booking ID is present in the response
- Validates first name and last name match the provided values
- Validates booking dates match the expected values

### Dependencies

- @playwright/test
- ../utils/common (stringFormat function)
- ../test_data/post_dynamicBody.json
