# Harver-QA-Web-Automation-Assessment

This project contains automated tests for https://the-internet.herokuapp.com/ using JavaScript with Playwright.

Test Scenarios Include:

1. Checkboxes 
2. Dropdown 
3. Form Authentication 
4. Hovers 
5. Notification Messages


## Prerequisites:

- Node.js (v14 or later)
- npm (comes with Node.js)

## Setup:

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install

4. To run the tests
   ```bash
   npx playwright test
   
5. To run individual test script by specifying the script name
   ```bash
   npx playwright test checkbox.spec.js 
   
6. To run tests in a specific browser, use:
   ```bash
     npx playwright test --project=chromium
     npx playwright test --project=firefox
     npx playwright test --project=webkit

   

### Thank you