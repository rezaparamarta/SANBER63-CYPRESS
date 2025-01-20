import addToCartPage from '../../support/pageObject/addToCartPage';

describe('Saucedemo add to cart Scenarios', () => {
    beforeEach(() => {
        cy.visit('');
    })
    it('Test Case 1 - Add to cart success', () => {
        cy.loginSaucedemo('standard_user', 'secret_sauce');
        cy.VerifySuccess('Products');
        addToCartPage.addBackPack();
        addToCartPage.verifyCart('1');
        addToCartPage.cartNoContent();
        //addToCartPage.removeBP();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        //cy.get('[data-test="shopping-cart-link"]').should('not.contain.text');
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        //cy.get('[data-test="shopping-cart-link"]').should('contain.text', '2');
        addToCartPage.verifyCart('2');
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.url().should('include', '/cart');
    });
});