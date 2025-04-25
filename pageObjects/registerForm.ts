export class RegisterForm {
    customerForm: string;
    firstNameInput: any;
    lastNameInput: any;
    addressInput: any;
    cityInput: any;
    stateInput: any;
    zipCodeInput: any;
    phoneInput: any;
    ssnInput: any;
    userNameInput: any;
    passwordInput: any;
    confirmPasswordInput: any;
    registerButton: any;
    welcomeMessage: any;
    accountCreatedMessage: any;

    /**
     * Constructor
     * @param page
     */
    constructor(page) {
        this.customerForm = '#customerForm';
        this.firstNameInput = page.locator(`${this.customerForm} input[name="customer.firstName"]`);
        this.lastNameInput = page.locator(`${this.customerForm} input[name="customer.lastName"]`);
        this.addressInput = page.locator(`${this.customerForm} input[name="customer.address.street"]`);
        this.cityInput = page.locator(`${this.customerForm} input[name="customer.address.city"]`);
        this.stateInput = page.locator(`${this.customerForm} input[name="customer.address.state"]`);
        this.zipCodeInput = page.locator(`${this.customerForm} input[name="customer.address.zipCode"]`);
        this.phoneInput = page.locator(`${this.customerForm} input[name="customer.phoneNumber"]`);
        this.ssnInput = page.locator(`${this.customerForm} input[name="customer.ssn"]`);
        this.userNameInput = page.locator(`${this.customerForm} input[name="customer.username"]`);
        this.passwordInput = page.locator(`${this.customerForm} input[name="customer.password"]`);
        this.confirmPasswordInput = page.locator(`${this.customerForm} input[name="repeatedPassword"]`);
        this.registerButton = page.locator(`${this.customerForm} input[type='submit']`);
        this.welcomeMessage = page.locator('#rightPanel h1[class="title"]');
        this.accountCreatedMessage = page.locator('#rightPanel p');
    }

    /**
     * Enters first name
     * @param firstName
     */
    public async enterFirstName(firstName) {
        await this.firstNameInput.fill(firstName);
    }

    /**
     * Enters last name
     * @param lastName
     */
    public async enterLastName(lastName) {
        await this.lastNameInput.fill(lastName);
    }

    /**
     * Enters address
     * @param address
     */
    public async enterAddress(address) {
        await this.addressInput.fill(address);
    }

    /**
     * Enters city
     * @param city
     */
    public async enterCity(city) {
        await this.cityInput.fill(city);
    }

    /**
     * Enters state
     * @param state
     */
    public async enterState(state) {
        await this.stateInput.fill(state);
    }

    /**
     * Enters zip code
     * @param zipCode
     */
    public async enterZipCode(zipCode) {
        await this.zipCodeInput.fill(zipCode);
    }

    /**
     * Enters phone number
     * @param phone
     */
    public async enterPhone(phone) {
        await this.phoneInput.fill(phone);
    }

    /**
     * Enters SSN
     * @param ssn
     */
    public async enterSSN(ssn) {
        await this.ssnInput.fill(ssn);
    }

    /**
     * Enters username
     * @param userName
     */
    public async enterUserName(userName) {
        await this.userNameInput.fill(userName);
    }

    /**
     * Enters password
     * @param password
     */
    public async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    /**
     * Enters confirm password field
     * @param confirmPassword
     */
    public async enterConfirmPassword(confirmPassword) {
        await this.confirmPasswordInput.fill(confirmPassword);
    }

    /**
     * Clicks the register button
     */
    public async clickRegisterButton() {
        await this.registerButton.click();
    }
}
