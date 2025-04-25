export class BillPayment {
    page: any;
    billPaymentForm: string;
    payeeName: any;
    payeeAddress: any;
    payeeCity: any;
    payeeState: any;
    payeeZipCode: any;
    payeePhone: any;
    payeeAccountNumber: any;
    payeeVerifyAccount: any;
    payeeAmount: any;
    payeeFromAccount: any;
    sendPaymentButton: any;
    billPayMessageTitle: any;
    billPayDetails: any;
    billPayAdditionalInfo: any;

    /**
     * Constructor
     * @param page
     */
    constructor(page) {
        this.page = page;
        this.billPaymentForm = '#billpayForm';
        this.payeeName = page.locator(`${this.billPaymentForm} input[name="payee.name"]`);
        this.payeeAddress = page.locator(`${this.billPaymentForm} input[name="payee.address.street"]`);
        this.payeeCity = page.locator(`${this.billPaymentForm} input[name="payee.address.city"]`);
        this.payeeState = page.locator(`${this.billPaymentForm} input[name="payee.address.state"]`);
        this.payeeZipCode = page.locator(`${this.billPaymentForm} input[name="payee.address.zipCode"]`);
        this.payeePhone = page.locator(`${this.billPaymentForm} input[name="payee.phoneNumber"]`);
        this.payeeAccountNumber = page.locator(`${this.billPaymentForm} input[name="payee.accountNumber"]`);
        this.payeeVerifyAccount = page.locator(`${this.billPaymentForm} input[name="verifyAccount"]`);
        this.payeeAmount = page.locator(`${this.billPaymentForm} input[name="amount"]`);
        this.payeeFromAccount = page.locator(`${this.billPaymentForm} select[name="fromAccountId"]`);
        this.sendPaymentButton = page.locator(`${this.billPaymentForm} input[type="button"]`);
        this.billPayMessageTitle = page.locator(`#billpayResult h1`);
        this.billPayDetails = page.locator(`#billpayResult p`).locator('nth=0');
        this.billPayAdditionalInfo = page.locator(`#billpayResult p`).locator('nth=1');
    }

    /**
     * Enters payee's name
     * @param name
     */
    public async enterPayeeName(name) {
        await this.payeeName.fill(name);
    }

    /**
     * Enters payee's address
     * @param address
     */
    public async enterPayeeAddress(address) {
        await this.payeeAddress.fill(address);
    }

    /**
     * Enters payee's city
     * @param city
     */
    public async enterPayeeCity(city) {
        await this.payeeCity.fill(city);
    }

    /**
     * Enters payee's state
     * @param state
     */
    public async enterPayeeState(state) {
        await this.payeeState.fill(state);
    }

    /**
     * Enters payee's zip code
     * @param zipCode
     */
    public async enterPayeeZipCode(zipCode) {
        await this.payeeZipCode.fill(zipCode);
    }

    /**
     * Enters payee's phone number
     * @param phone
     */
    public async enterPayeePhone(phone) {
        await this.payeePhone.fill(phone);
    }

    /**
     * Enters payee's account number
     * @param accountNumber
     */
    public async enterPayeeAccountNumber(accountNumber) {
        await this.payeeAccountNumber.fill(accountNumber);
    }

    /**
     * Enters verification account number
     * @param verifyAccount
     */
    public async enterPayeeVerifyAccount(verifyAccount) {
        await this.payeeVerifyAccount.fill(verifyAccount);
    }

    /**
     * Enters payment amount
     * @param amount
     */
    public async enterPayeeAmount(amount) {
        await this.payeeAmount.fill(amount);
    }

    /**
     * Selects the account to pay from
     * @param accountNumber
     */
    public async selectFromAccount(accountNumber) {
        await this.payeeFromAccount.selectOption(accountNumber);
    }

    /**
     * Clicks the send payment button
     */
    public async clickSendPaymentButton() {
        await this.sendPaymentButton.click();
    }
}
