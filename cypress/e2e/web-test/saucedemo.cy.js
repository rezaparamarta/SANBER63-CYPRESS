describe('Test Suite 1', () => {
    it('Test Case 1 - Login success', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
    });
    it('Test Case 2 - Login fail - empty username', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
    });
    it('Test Case 3 - Login failed - locked user', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('locked_out_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
    });
});