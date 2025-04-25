## Tests Covered

- **User Registration**: Automates the process of creating a new user account.
- **Login**: Validates user login functionality with valid credentials.
- **Navigation**: Tests navigation through header, left panel, and footer links.
- **Account Management**: Covers account creation and fund transfer functionalities.
- **Bill Payments**: Automates the process of paying bills.
- **API Validation**: Validates backend API responses for getTransactionsByAmount.

### Key Directories and Files

- **pageObjects/**: Contains the Page Objects
- **tests/**: Contains test scripts
- **testData/**: User Test Data

## How to Run

1. Install dependencies:
   npm install
2. Run all tests:
   npx playwright test