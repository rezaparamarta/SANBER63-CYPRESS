describe('Login using fixture', () => {
    it('Success login', () =>{
        cy.fixture('Users.json').then((users)=>{
            const datauser = user[0];
            cy.loginSaucedemo(datauser.username)
        });
    });
});