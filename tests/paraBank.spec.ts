import { test, expect } from '@playwright/test';
import { AccountServices } from '../pageObjects/accountServices';
import { RegisterForm } from '../pageObjects/registerForm';
import { StringUtilities } from '../pageObjects/stringUtilities';
import { LoginForm } from '../pageObjects/loginForm';
import { Navigation } from '../pageObjects/navigation';
import { OpenAccount } from '../pageObjects/openAccount';
import { AccountsOverview } from '../pageObjects/accountsOverview';
import { TransferFunds } from '../pageObjects/transferFunds';
import { BillPayment } from '../pageObjects/billPayment';
import { AdminPage } from '../pageObjects/adminPage';
import { user } from '../testData/user.json';
import { payee } from '../testData/payee.json';

const stringUtils = new StringUtilities();
const firstName = stringUtils.appendTimestamp(user.firstName);
const lastName = stringUtils.appendTimestamp(user.lastName);
const userName = stringUtils.appendTimestamp(user.userName);

// Transfer amount for fund transfer tests
const transferAmount = '50.00';

// Variables to store account numbers
var defaultAccountNumber = 0;
var newAccountNumber = 0;

test('Admin Setup', async ({ page }) => {
    const adminPage = new AdminPage(page);
    const navigation = new Navigation(page);

    await page.goto('/');
    await navigation.clickLeftHeaderPanelAdminPageLink();
    await adminPage.clickCleanButton();
    await adminPage.clickInitializeButton();
    await adminPage.enterInitialBalance('1000.00');
    await adminPage.enterMinimumBalance('100.00');
    await adminPage.clickSubmitButton();
});

test('Creation of New User', async ({ page }) => {
    await page.goto('/');
    const loginForm = new LoginForm(page);
    await loginForm.clickRegisterButton();
    const registerForm = new RegisterForm(page);
    await registerForm.enterFirstName(firstName);
    await registerForm.enterLastName(lastName);
    await registerForm.enterAddress(user.address);
    await registerForm.enterCity(user.city);
    await registerForm.enterState(user.state);
    await registerForm.enterZipCode(user.zipCode);
    await registerForm.enterPhone(user.phone);
    await registerForm.enterSSN(user.ssn);
    await registerForm.enterUserName(userName);
    await registerForm.enterPassword(user.password);
    await registerForm.enterConfirmPassword(user.password);
    await registerForm.clickRegisterButton();

    // Validate successful registration
    await expect(registerForm.welcomeMessage).toContainText(`Welcome ${userName}`);
    await expect(registerForm.accountCreatedMessage).toContainText(`Your account was created successfully. You are now logged in.`);
});

test('Login of New User', async ({ page }) => {
    const loginForm = new LoginForm(page);
    const navigation = new Navigation(page);
    const accountsOverview = new AccountsOverview(page);

    await loginForm.loginToApplication(userName, user.password);

    // Validate successful login
    await expect(navigation.userWelcome).toContainText('Welcome');
    await expect(navigation.userWelcome).toContainText(firstName);
    await expect(navigation.userWelcome).toContainText(lastName);

    // Retrieve and store the default account number
    defaultAccountNumber = await accountsOverview.getdefaultAccountNumber();
});

test('Navigation', async ({ page }) => {
    const loginForm = new LoginForm(page);
    const navigation = new Navigation(page);

    await loginForm.loginToApplication(userName, user.password);

    // Validate navigation through header, left panel, and footer links
    await navigation.clickHeaderPanelHomeButton();
    await expect(navigation.bodyPanel).toContainText('Latest News');
    await navigation.clickHeaderPanelAboutUsButton();
    await expect(navigation.bodyPanel).toContainText('ParaSoft Demo Website');
    await navigation.clickHeaderPanelContactUsButton();
    await expect(navigation.bodyPanel).toContainText('Customer Care');

    await navigation.clickLeftHeaderPanelAboutUsLink();
    await expect(navigation.bodyPanel).toContainText('ParaSoft Demo Website');
    await navigation.clickLeftHeaderPanelServicesLink();
    await expect(navigation.bodyPanel).toContainText('Available RESTful services');
    await navigation.clickLeftHeaderPanelAdminPageLink();
    await expect(navigation.bodyPanel).toContainText('Administration');

    await navigation.clickFooterPanelHomeLink();
    await expect(navigation.bodyPanel).toContainText('Latest News');
    await navigation.clickFooterPanelAboutUsLink();
    await expect(navigation.bodyPanel).toContainText('ParaSoft Demo Website');
    await navigation.clickFooterPanelServicesLink();
    await expect(navigation.bodyPanel).toContainText('Available RESTful services');
    await navigation.clickFooterPanelSiteMapLink();
    await expect(navigation.bodyPanel).toContainText('Solutions');
    await navigation.clickFooterPanelContactUsLink();
    await expect(navigation.bodyPanel).toContainText('Customer Care');
});

test('Creation of Savings Account', async ({ page }) => {
    const loginForm = new LoginForm(page);
    const accountServices = new AccountServices(page);
    const openAccount = new OpenAccount(page);
    const accountsOverview = new AccountsOverview(page);

    await loginForm.loginToApplication(userName, user.password);
    await accountServices.clickOpenAccount();
    await openAccount.selectAccountType('SAVINGS');
    await page.waitForLoadState('networkidle');
    await openAccount.clickOpenAccountButton();
    await page.waitForLoadState('networkidle');

    // Validate successful account creation
    await expect(openAccount.openAccountSuccessMessageTitle).toContainText('Account Opened!');
    await expect(openAccount.openAccountSuccessMessageBody).toContainText('Congratulations, your account is now open.');
    await expect(openAccount.newAcountNumberMessage).toContainText('Your new account number:');
    await expect(openAccount.newAccountNumber).toContainText(/^\d+$/);

    // Store the new account number
    newAccountNumber = await openAccount.newAccountNumber.textContent();

    // Validate account balances
    await accountServices.clickAccountsOverview();
    await expect(await accountsOverview.getAccountBalance(defaultAccountNumber)).toEqual('$900.00');
    await expect(await accountsOverview.getAccountAvailableAmount(defaultAccountNumber)).toEqual('$900.00');
    await expect(await accountsOverview.getAccountBalance(newAccountNumber)).toEqual('$100.00');
    await expect(await accountsOverview.getAccountAvailableAmount(newAccountNumber)).toEqual('$100.00');
    await expect(await accountsOverview.getTotalBalance()).toEqual('$1000.00');
});

test('Funds Transfer ', async ({ page }) => {
    const loginForm = new LoginForm(page);
    const accountServices = new AccountServices(page);
    const transferFunds = new TransferFunds(page);
    const accountsOverview = new AccountsOverview(page);

    await loginForm.loginToApplication(userName, user.password);
    await accountServices.clickTransferFunds();
    await transferFunds.enterAmount(transferAmount);
    await transferFunds.selectFromAccount(newAccountNumber);
    await transferFunds.selectToAccount(defaultAccountNumber);
    await transferFunds.clickTransferButton();

    // Validate successful fund transfer
    await expect(transferFunds.transferMessageTitle).toContainText('Transfer Complete!');
    await expect(transferFunds.transferDetails)
        .toContainText(`$${transferAmount} has been transferred from account #${newAccountNumber} to account #${defaultAccountNumber}.`);
    await expect(transferFunds.transferAdditionalInfo)
        .toContainText('See Account Activity for more details.');
    
    // Validate account balances after fund transfer
    await accountServices.clickAccountsOverview();
    await expect(await accountsOverview.getAccountBalance(defaultAccountNumber)).toEqual('$950.00');
    await expect(await accountsOverview.getAccountAvailableAmount(defaultAccountNumber)).toEqual('$950.00');
    await expect(await accountsOverview.getAccountBalance(newAccountNumber)).toEqual('$50.00');
    await expect(await accountsOverview.getAccountAvailableAmount(newAccountNumber)).toEqual('$50.00');
    await expect(await accountsOverview.getTotalBalance()).toEqual('$1000.00');
});

test('Bill Pay', async ({ page }) => {
    const loginForm = new LoginForm(page);
    const accountServices = new AccountServices(page);
    const billPayment = new BillPayment(page);
    const accountsOverview = new AccountsOverview(page);

    await loginForm.loginToApplication(userName, user.password);
    await accountServices.clickBillPay();
    await billPayment.enterPayeeName(payee.name);
    await billPayment.enterPayeeAddress(payee.address);
    await billPayment.enterPayeeCity(payee.city);
    await billPayment.enterPayeeState(payee.state);
    await billPayment.enterPayeeZipCode(payee.zipCode);
    await billPayment.enterPayeePhone(payee.phone);
    await billPayment.enterPayeeAccountNumber(payee.accountNumber);
    await billPayment.enterPayeeVerifyAccount(payee.accountNumber);
    await billPayment.enterPayeeAmount(payee.amount);
    await billPayment.selectFromAccount(newAccountNumber);
    await billPayment.clickSendPaymentButton();

    // Validate successful bill payment
    await expect(billPayment.billPayMessageTitle).toContainText('Bill Payment Complete');
    await expect(billPayment.billPayDetails)
        .toContainText(`Bill Payment to ${payee.name} in the amount of $${payee.amount} from account ${newAccountNumber} was successful.`);
    await expect(billPayment.billPayAdditionalInfo)
        .toContainText('See Account Activity for more details.');

    // Validate account balances after bill payment
    await accountServices.clickAccountsOverview();
    await expect(await accountsOverview.getAccountBalance(defaultAccountNumber)).toEqual('$950.00');
    await expect(await accountsOverview.getAccountAvailableAmount(defaultAccountNumber)).toEqual('$950.00');
    await expect(await accountsOverview.getAccountBalance(newAccountNumber)).toEqual('-$50.00');
    await expect(await accountsOverview.getAccountAvailableAmount(newAccountNumber)).toEqual('$0.00');
    await expect(await accountsOverview.getTotalBalance()).toEqual('$900.00');

});

test("getTransactionsByAmount API", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/parabank/services/bank/accounts/${newAccountNumber}/transactions/amount/${transferAmount}`, {
        headers: {
            "Accept": "application/json"
        }
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(`${responseBody[0].accountId}`).toEqual(`${newAccountNumber}`);
    expect(`${responseBody[0].type}`).toEqual(`Debit`);
    expect(`${responseBody[0].amount}.00`).toEqual(`${transferAmount}`);
    expect(`${responseBody[0].description}`).toEqual(`Funds Transfer Sent`);
});
