class addToCartPage {
    username = '#user-name';
    password = '#password';
    loginButton = '#login-button';
    errorMessage = '[data-test="error"]';
    successMessage = '[data-test="title"]';
    backpack = '[data-test="add-to-cart-sauce-labs-backpack"]';
    cart = '[data-test="shopping-cart-link"]';

    clickLogin() {
        cy.get(this.loginButton).click();
    }

    addBackPack() {
        cy.get(this.backpack).click();
    }

    verifyCart(cartValue) {
        cy.get(this.cart).should('contain.text', cartValue);
    }

    cartNoContent() {
        cy.get(this.cart).should('not.contain.text');
    }



}

module.exports = new addToCartPage();
