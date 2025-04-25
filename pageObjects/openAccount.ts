export class OpenAccount {
    openAccountForm: string;
    accountType: any;
    fromAccount: any;
    openAccountButton: any;
    openAccountSuccessMessageTitle: any;
    openAccountSuccessMessageBody: any;
    newAcountNumberMessage: any;
    newAccountNumber: any;

    /**
     * Constructor
     * @param page
     */
    constructor(page) {
        this.openAccountForm = '#openAccountForm';
        this.accountType = page.locator(`${this.openAccountForm} select[id="type"]`);
        this.fromAccount = page.locator(`${this.openAccountForm} select[id="fromAccountId"]`);
        this.openAccountButton = page.locator(`${this.openAccountForm} input[type="button"]`);
        this.openAccountSuccessMessageTitle = page.locator(`#openAccountResult h1`);
        this.openAccountSuccessMessageBody = page.locator(`#openAccountResult p`).locator('nth=0');
        this.newAcountNumberMessage = page.locator(`#openAccountResult p b`);
        this.newAccountNumber = page.locator(`#openAccountResult a#newAccountId`);
    }

    /**
     * Selects an account type from the dropdown
     * @param accountType
     */
    public async selectAccountType(accountType) {
        await this.accountType.selectOption(accountType);
    }

    /**
     * Selects a source account from the dropdown
     * @param fromAccount
     */
    public async selectFromAccount(fromAccount) {
        await this.fromAccount.selectOption(fromAccount);
    }

    /**
     * Clicks the Open Account button to submit the form.
     */
    public async clickOpenAccountButton() {
        await this.openAccountButton.click();
    }
}
