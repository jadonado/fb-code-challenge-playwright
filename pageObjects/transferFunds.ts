export class TransferFunds {
    page: any;
    transferFundsForm: string;
    amountInput: any;
    fromAccountDropdown: any;
    toAccountDropdown: any;
    transferButton: any;
    transferMessageTitle: any;
    transferDetails: any;
    transferAdditionalInfo: any;

    /**
     * Constructor
     * @param page
     */
    constructor(page) {
        this.page = page;
        this.transferFundsForm = '#transferApp';
        this.amountInput = page.locator(`${this.transferFundsForm} input#amount`);
        this.fromAccountDropdown = page.locator(`${this.transferFundsForm} select#fromAccountId`);
        this.toAccountDropdown = page.locator(`${this.transferFundsForm} select#toAccountId`);
        this.transferButton = page.locator(`${this.transferFundsForm} input[type="submit"]`);
        this.transferMessageTitle = page.locator(`#showResult h1`);
        this.transferDetails = page.locator(`#showResult p`).locator('nth=0');
        this.transferAdditionalInfo = page.locator(`#showResult p`).locator('nth=1');
    }

    /**
     * Enters amount
     * @param amount
     */
    public async enterAmount(amount) {
        await this.amountInput.fill(amount);
    }

    /**
     * Selects the source account
     * @param accountNumber
     */
    public async selectFromAccount(accountNumber) {
        await this.fromAccountDropdown.selectOption(accountNumber);
    }

    /**
     * Selects the destination account
     * @param accountNumber
     */
    public async selectToAccount(accountNumber) {
        await this.toAccountDropdown.selectOption(accountNumber);
    }

    /**
     * Clicks the Transfer button
     */
    public async clickTransferButton() {
        await this.transferButton.click();
    }
}
