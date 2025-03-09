# Playwright API Testing Framework

This repository contains a collection of API tests using Playwright Test. The tests are designed to validate the functionality of the Restful-Booker API (https://restful-booker.herokuapp.com).

## 📋 Overview

This project demonstrates how to use Playwright for API testing, covering various HTTP methods (GET, POST, PUT, PATCH, DELETE) and different testing scenarios. The tests showcase:

- Creating, retrieving, updating, and deleting bookings
- Authentication
- Query parameters
- Dynamic data generation
- End-to-end API flows

## 🛠️ Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

## 🧪 Test Structure

```
playwright/
├── test_data/                  # Test data files
│   ├── auth_token.json         # Authentication token data
│   ├── Patch_data.json         # Data for PATCH requests
│   ├── post_01_data.json       # Static data for POST requests
│   ├── post_dynamicBody.json   # Template for dynamic POST request data
│   └── put_requestBody.json    # Data for PUT requests
├── tests/                      # Test files
│   ├── apiTesting_deletePost.spec.js
│   ├── apiTesting_endToEnd.spec.js
│   ├── apiTesting_GetAPIRequest.spec.js
│   ├── apiTesting_getRquest.spec.js
│   ├── apiTesting_getUser.spec.js
│   ├── apiTesting_PostApirequest.spec.js
│   ├── apiTesting_PostRequest.spec.js
│   ├── apiTesting_postUser.spec.js
│   └── apiTesting_PutRequest.spec.js
├── utils/                      # Utility functions
│   └── common.js               # Common utility functions
├── playwright.config.js        # Playwright configuration
└── package.json                # Project dependencies
```

## 🚀 Running Tests

### Run all tests

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test tests/apiTesting_endToEnd.spec.js
```

### Run tests with UI mode

```bash
npx playwright test --ui
```

### View test report

```bash
npx playwright show-report
```

## 📝 Test Descriptions

### 1. apiTesting_deletePost.spec.js
Tests PATCH API request functionality by creating a booking, retrieving it, authenticating, and updating it with a PATCH request.

### 2. apiTesting_endToEnd.spec.js
Tests the complete end-to-end API flow including creating, retrieving, updating, and deleting a booking.

### 3. apiTesting_GetAPIRequest.spec.js
Tests GET API request with query parameters by creating a booking and then retrieving it using firstname and lastname as query parameters.

### 4. apiTesting_getRquest.spec.js
Tests basic GET API request functionality by creating a booking and then retrieving it by ID.

### 5. apiTesting_getUser.spec.js
Tests POST request with a static request body to create a booking.

### 6. apiTesting_PostApirequest.spec.js
Tests POST API request using data from a JSON file to create a booking.

### 7. apiTesting_PostRequest.spec.js
Tests POST API request using dynamically generated random data with faker.js and luxon libraries.

### 8. apiTesting_postUser.spec.js
Tests POST request with a dynamic JSON file using string formatting to inject values into a template.

### 9. apiTesting_PutRequest.spec.js
Tests PUT API request functionality by creating a booking, retrieving it, authenticating, and updating it with a PUT request.

## 📚 Detailed Documentation

For detailed documentation of each test file, please refer to the [test-documentation](./test-documentation) directory.

## 📦 Dependencies

- [@playwright/test](https://playwright.dev/docs/api/class-test) - Testing framework
- [@faker-js/faker](https://fakerjs.dev/) - Generating random test data
- [luxon](https://moment.github.io/luxon/) - Date manipulation

## 🔍 Additional Information

### Base URL

The tests are configured to run against the Restful-Booker API at https://restful-booker.herokuapp.com.

### Authentication

Some tests require authentication. The authentication token is obtained by sending a POST request to the `/auth` endpoint with credentials from the `auth_token.json` file.

### Utilities

The `stringFormat` utility function in `utils/common.js` is used to format strings with dynamic values, particularly for injecting values into JSON templates.

## 📄 License

This project is licensed under the MIT License.
