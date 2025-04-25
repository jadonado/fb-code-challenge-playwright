export class AccountsOverview {
    page: any;
    accountsOverviewPanel: string;
    accountTable: any;
    accountTableRows: any;
    accountTableHeader: any;
    accountTableData: any;

    /**
     * Constructor
     * @param page
     */
    constructor(page) {
        this.page = page;
        this.accountsOverviewPanel = '#rightPanel';
        this.accountTable = page.locator(`${this.accountsOverviewPanel} table`);
        this.accountTableRows = page.locator(`${this.accountTable} tbody tr`);
        this.accountTableHeader = page.locator(`${this.accountTable} thead tr`);
        this.accountTableData = page.locator(`${this.accountTable} tbody tr td`);
    }

    /**
     * Gets the balance of a specific account
     * @param accountNumber
     * @returns
     */
    public async getAccountBalance(accountNumber) {
        await this.page.waitForLoadState('networkidle');
        return await this.page.locator('#accountTable tbody tr')
            .filter({ hasText: accountNumber })
            .locator('td:nth-child(2)') // Balance is in the second column
            .textContent();
    }

    /**
     * Gets the available amount of a specific account
     * @param accountNumber
     * @returns
     */
    public async getAccountAvailableAmount(accountNumber) {
        await this.page.waitForLoadState('networkidle');
        return await this.page.locator('#accountTable tbody tr')
            .filter({ hasText: accountNumber })
            .locator('td:nth-child(3)')
            .textContent();
    }

    /**
     * Gets the default account number (first account in the table).
     * @returns
     */
    public async getdefaultAccountNumber() {
        await this.page.waitForLoadState('networkidle');
        return await this.page.locator('#accountTable tbody')
            .locator('tr:nth-child(1)')
            .locator('td:nth-child(1)')
            .textContent();
    }

    /**
     * Gets the value of Total Balance
     * @returns
     */
    public async getTotalBalance() {
        await this.page.waitForLoadState('networkidle');
        return await this.page.locator('#accountTable tbody tr')
            .filter({ hasText: 'Total' })
            .locator('td:nth-child(2)')
            .textContent();
    }
}
