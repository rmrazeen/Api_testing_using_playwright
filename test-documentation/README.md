# API Testing Documentation

This repository contains a collection of API tests using Playwright. The tests are designed to validate the functionality of the Restful-Booker API (https://restful-booker.herokuapp.com).

## Test Files Overview

1. [apiTesting_deletePost.spec.js](./apiTesting_deletePost.md) - Tests PATCH API request functionality
2. [apiTesting_endToEnd.spec.js](./apiTesting_endToEnd.md) - Tests end-to-end API flow including DELETE operation
3. [apiTesting_GetAPIRequest.spec.js](./apiTesting_GetAPIRequest.md) - Tests GET API request with query parameters
4. [apiTesting_getRquest.spec.js](./apiTesting_getRquest.md) - Tests basic GET API request
5. [apiTesting_getUser.spec.js](./apiTesting_getUser.md) - Tests POST request with static body
6. [apiTesting_PostApirequest.spec.js](./apiTesting_PostApirequest.md) - Tests POST API request with data from JSON file
7. [apiTesting_PostRequest.spec.js](./apiTesting_PostRequest.md) - Tests POST API request with dynamic random data
8. [apiTesting_postUser.spec.js](./apiTesting_postUser.md) - Tests POST request with dynamic JSON file
9. [apiTesting_PutRequest.spec.js](./apiTesting_PutRequest.md) - Tests PUT API request functionality

## Test Data

The tests use various test data files located in the `test_data` directory:

- `auth_token.json` - Authentication token data
- `Patch_data.json` - Data for PATCH requests
- `post_01_data.json` - Static data for POST requests
- `post_dynamicBody.json` - Template for dynamic POST request data
- `put_requestBody.json` - Data for PUT requests

## Utilities

The tests use utility functions from the `utils/common.js` file, including:

- `stringFormat` - A function to format strings with dynamic values

## Configuration

The tests are configured in `playwright.config.js` to run against the Restful-Booker API at https://restful-booker.herokuapp.com.
