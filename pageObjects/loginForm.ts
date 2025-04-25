export class LoginForm {
    page: any;
    loginForm: string;
    userNameInput: any;
    passwordInput: any;
    loginButton: any;
    registerButton: any;

    /**
     * Constructor
     * @param page
     */
    constructor(page) {
        this.page = page;
        this.loginForm = 'form[name="login"]';
        this.userNameInput = page.locator(`${this.loginForm} input[name="username"]`);
        this.passwordInput = page.locator(`${this.loginForm} input[name="password"]`);
        this.loginButton = page.locator(`${this.loginForm} input[type="submit"]`);
        this.registerButton = page.locator('#leftPanel a:text("Register")');
    }

    /**
     * Navigates to the login page.
     */
    public async goToLoginPage() {
        await this.page.goto('/');
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
     * Clicks the login button
     */
    public async clickLoginButton() {
        await this.loginButton.click();
    }

    /**
     * Clicks the register button
     */
    public async clickRegisterButton() {
        await this.registerButton.click();
    }

    /**
     * Logs in to the application
     * @param userName
     * @param password
     */
    public async loginToApplication(userName, password) {
        await this.goToLoginPage();
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}
