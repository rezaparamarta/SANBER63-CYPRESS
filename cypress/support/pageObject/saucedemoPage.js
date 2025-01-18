class saucedemoPage {
    username = '#user-name';
    password = '#password';
    loginButton = '#login-button';
    errorMessage = '[data-test="error"]';
    successMessage = '[data-test="title"]';

    clickLogin() {
        cy.get(this.loginButton).click();
    }
}

module.exports = new saucedemoPage();