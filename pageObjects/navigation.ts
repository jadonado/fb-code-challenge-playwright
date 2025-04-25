export class Navigation {
    // Locators for various elements in the navigation panel
    bodyPanel: any;
    userWelcome: any;
    headerPanelHomeButton: any;
    headerPanelAboutUsButton: any;
    headerPanelContactUsButton: any;
    leftHeaderPanelSolutionsLink: any;
    leftHeaderPanelAboutUsLink: any;
    leftHeaderPanelServicesLink: any;
    leftHeaderPanelProductsLink: any;
    lefHeaderPanelLocationsLink: any;
    leftHeaderPanelAdminPageLink: any;
    footerPanelHomeLink: any;
    footerPanelAboutUsLink: any;
    footerPanelServicesLink: any;
    footerPanelProductsLink: any;
    footerPanelLocationsLink: any;
    footerPanelForumLink: any;
    footerPanelSiteMapLink: any;
    footerPanelContactUsLink: any;

    /**
     * Constructor
     * @param page
     */
    constructor(page) {
        this.userWelcome = page.locator('#leftPanel p');
        this.bodyPanel = page.locator('#bodyPanel');
        this.headerPanelHomeButton = page.locator('#headerPanel li.home a');
        this.headerPanelAboutUsButton = page.locator('#headerPanel li.aboutus a');
        this.headerPanelContactUsButton = page.locator('#headerPanel li.contact a');
        this.leftHeaderPanelSolutionsLink = page.locator('#headerPanel li.Solutions');
        this.leftHeaderPanelAboutUsLink = page.locator('#headerPanel ul.leftmenu li a:has-text("About Us")');
        this.leftHeaderPanelServicesLink = page.locator('#headerPanel ul.leftmenu li a:has-text("Services")');
        this.leftHeaderPanelProductsLink = page.locator('#headerPanel ul.leftmenu li a:has-text("Products")');
        this.lefHeaderPanelLocationsLink = page.locator('#headerPanel ul.leftmenu li a:has-text("Locations")');
        this.leftHeaderPanelAdminPageLink = page.locator('#headerPanel ul.leftmenu li a:has-text("Admin Page")');
        this.footerPanelHomeLink = page.locator('#footerPanel li a:has-text("Home")');
        this.footerPanelAboutUsLink = page.locator('#footerPanel li a:has-text("About Us")');
        this.footerPanelServicesLink = page.locator('#footerPanel li a:has-text("Services")');
        this.footerPanelProductsLink = page.locator('#footerPanel li a:has-text("Products")');
        this.footerPanelLocationsLink = page.locator('#footerPanel li a:has-text("Locations")');
        this.footerPanelForumLink = page.locator('#footerPanel li a:has-text("Forum")');
        this.footerPanelSiteMapLink = page.locator('#footerPanel li a:has-text("Site Map")');
        this.footerPanelContactUsLink = page.locator('#footerPanel li a:has-text("Contact Us")');
    }

    /**
     * Clicks the Home button
     */
    public async clickHeaderPanelHomeButton() {
        await this.headerPanelHomeButton.click();
    }

    /**
     * Clicks the About Us button
     */
    public async clickHeaderPanelAboutUsButton() {
        await this.headerPanelAboutUsButton.click();
    }

    /**
     * Clicks the Contact Us" button
     */
    public async clickHeaderPanelContactUsButton() {
        await this.headerPanelContactUsButton.click();
    }

    /**
     * Clicks the Solutions link in the left header panel.
     */
    public async clickLeftHeaderPanelSolutionsLink() {
        await this.leftHeaderPanelSolutionsLink.click();
    }

    /**
     * Clicks the About Us link in the left header panel.
     */
    public async clickLeftHeaderPanelAboutUsLink() {
        await this.leftHeaderPanelAboutUsLink.click();
    }

    /**
     * Clicks the Services link in the left header panel.
     */
    public async clickLeftHeaderPanelServicesLink() {
        await this.leftHeaderPanelServicesLink.click();
    }

    /**
     * Clicks the Products link in the left header panel.
     */
    public async clickLeftHeaderPanelProductsLink() {
        await this.leftHeaderPanelProductsLink.click();
    }

    /**
     * Clicks the Locations link in the left header panel.
     */
    public async clickLeftHeaderPanelLocationsLink() {
        await this.lefHeaderPanelLocationsLink.click();
    }

    /**
     * Clicks the Admin Page link in the left header panel.
     */
    public async clickLeftHeaderPanelAdminPageLink() {
        await this.leftHeaderPanelAdminPageLink.click();
    }

    /**
     * Clicks the Home link in the footer panel.
     */
    public async clickFooterPanelHomeLink() {
        await this.footerPanelHomeLink.click();
    }

    /**
     * Clicks the About Us link in the footer panel.
     */
    public async clickFooterPanelAboutUsLink() {
        await this.footerPanelAboutUsLink.click();
    }

    /**
     * Clicks the Services link in the footer panel.
     */
    public async clickFooterPanelServicesLink() {
        await this.footerPanelServicesLink.click();
    }

    /**
     * Clicks the Products link in the footer panel.
     */
    public async clickFooterPanelProductsLink() {
        await this.footerPanelProductsLink.click();
    }

    /**
     * Clicks the Locations link in the footer panel.
     */
    public async clickFooterPanelLocationsLink() {
        await this.footerPanelLocationsLink.click();
    }

    /**
     * Clicks the Forum link in the footer panel.
     */
    public async clickFooterPanelForumLink() {
        await this.footerPanelForumLink.click();
    }

    /**
     * Clicks the Site Map link in the footer panel.
     */
    public async clickFooterPanelSiteMapLink() {
        await this.footerPanelSiteMapLink.click();
    }

    /**
     * Clicks the Contact Us link in the footer panel.
     */
    public async clickFooterPanelContactUsLink() {
        await this.footerPanelContactUsLink.click();
    }
}
