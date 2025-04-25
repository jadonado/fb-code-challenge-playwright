export class AdminPage {
    initializeButton: any;
    cleanButton: any;
    initBalanceInput: any;
    minBalanceInput: any;
    submitButton: any;

    constructor(page) {
        this.initializeButton = page.locator('button[value="INIT"]');
        this.cleanButton = page.locator('button[value="CLEAN"]');
        this.initBalanceInput = page.locator('input#initialBalance');
        this.minBalanceInput = page.locator('input#minimumBalance');
        this.submitButton = page.locator('input[value="Submit"]');
    }

    /**
     * Clicks the Initialize button
     */
    public async clickInitializeButton() {
        await this.initializeButton.click();
    }

    /**
     * Clicks the Clean button
     */
    public async clickCleanButton() {
        await this.cleanButton.click();
    }

    /**
     * Enters initial balance
     * @param amount
     */
    public async enterInitialBalance(amount) {
        await this.initBalanceInput.fill(amount);
    }

    /**
     * Enters minimum balance
     * @param amount
     */
    public async enterMinimumBalance(amount) {
        await this.minBalanceInput.fill(amount);
    }

    /**
     * Clicks the Submit button
     */
    public async clickSubmitButton() {
        await this.submitButton.click();
    }

}     