import saucedemoPage from '../../support/pageObject/saucedemoPage';

describe('Saucedemo Login Scenarios', () => {
    beforeEach(() => {
        cy.visit('');
    })
    it('Test Case 1 - Login success', () => {
        cy.loginSaucedemo('standard_user', 'secret_sauce');
        cy.VerifySuccess('Products');
    });

    it.only('Test Case 2 - Login fail - empty username', () => {
        cy.get('#password').type('secret_sauce');
        saucedemoPage.clickLogin();
        cy.VerifyError('Epic sadface: Username is required');
    });

    it.skip('Test Case 3 - Login failed - locked user', () => {
        cy.loginSaucedemo('locked_out_user', 'secret_sauce');
        // cy.get('#user-name').type('locked_out_user');
        // cy.get('#password').type('secret_sauce');
        // cy.get('#login-button').click();
        cy.VerifyError('Epic sadface: Sorry, this user has been locked out.');
    });

    // it.only('Test Case 4 - Login env', () => {
    //     cy.get('#user-name').type(Cypress.env('userstg'));
    //     cy.get('#password').type('secret_sauce');
    //     cy.get('#login-button').click();
    // });
});