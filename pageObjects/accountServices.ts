export class AccountServices {
    AccountServicesPanel: string;
    openAccount: any;
    accountsOverview: any;
    transferFunds: any;
    billPay: any;
    findTransactions: any;
    updateContactInfo: any;
    requestLoan: any;
    logOut: any;

    /**
     * Constructor
     * @param page
     */
    constructor(page) {
        this.AccountServicesPanel = '#leftPanel';
        this.openAccount = page.locator(`${this.AccountServicesPanel} a:has-text("Open New Account")`);
        this.accountsOverview = page.locator(`${this.AccountServicesPanel} a:has-text("Accounts Overview")`);
        this.transferFunds = page.locator(`${this.AccountServicesPanel} a:has-text("Transfer Funds")`);
        this.billPay = page.locator(`${this.AccountServicesPanel} a:has-text("Bill Pay")`);
        this.findTransactions = page.locator(`${this.AccountServicesPanel} a:has-text("Find Transactions")`);
        this.updateContactInfo = page.locator(`${this.AccountServicesPanel} a:has-text("Update Contact Info")`);
        this.requestLoan = page.locator(`${this.AccountServicesPanel} a:has-text("Request Loan")`);
        this.logOut = page.locator(`${this.AccountServicesPanel} a:has-text("Log Out")`);
    }

    /**
     * Clicks the "Open New Account" link.
     */
    public async clickOpenAccount() {
        await this.openAccount.click();
    }

    /**
     * Clicks the "Accounts Overview" link.
     */
    public async clickAccountsOverview() {
        await this.accountsOverview.click();
    }

    /**
     * Clicks the "Transfer Funds" link.
     */
    public async clickTransferFunds() {
        await this.transferFunds.click();
    }

    /**
     * Clicks the "Bill Pay" link.
     */
    public async clickBillPay() {
        await this.billPay.click();
    }

    /**
     * Clicks the "Find Transactions" link.
     */
    public async clickFindTransactions() {
        await this.findTransactions.click();
    }

    /**
     * Clicks the "Update Contact Info" link.
     */
    public async clickUpdateContactInfo() {
        await this.updateContactInfo.click();
    }

    /**
     * Clicks the "Request Loan" link.
     */
    public async clickRequestLoan() {
        await this.requestLoan.click();
    }

    /**
     * Clicks the "Log Out" link.
     */
    public async clickLogOut() {
        await this.logOut.click();
    }
}
