describe('Saucedemo Login Scenarios', () => {
    beforeEach(() => {
        cy.visit('');
    })
    it.only('Test Case 1 - Login success', () => {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('[data-test="title"]').should('contain.text', 'Products');
    });

    it.skip('Test Case 2 - Login fail - empty username', () => {
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');
    });

    it.skip('Test Case 3 - Login failed - locked user', () => {
        cy.get('#user-name').type('locked_out_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });
});