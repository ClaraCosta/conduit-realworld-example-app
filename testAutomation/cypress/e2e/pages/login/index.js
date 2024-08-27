const element = require('./elements').ELEMENTS;

class login{

    validateLoginPage(){

        cy.url('/login').then(() => {
            cy.contains('Sign in');
        });
    }

    loginWithInvalidCredentials(username, password){
        cy.get(element.emailInput)
        .should('have.attr', 'type', 'email')
        .and('have.attr', 'placeholder', 'Email')
        .type(username);

        cy.get(element.passwordInput)
        .should('have.attr', 'type', 'password')
        .and('have.attr', 'placeholder', 'Password')
        .type(password).wait(1000);

         return cy.get('.btn').click();
    }

    loginWithValidCredentials(username, password){
        cy.get(element.emailInput)
        .should('have.attr', 'type', 'email')
        .and('have.attr', 'placeholder', 'Email')
        .type(username);

        cy.get(element.passwordInput)
        .should('have.attr', 'type', 'password')
        .and('have.attr', 'placeholder', 'Password')
        .type(password).wait(1000);

         return cy.get('.btn').click();
    }


}
export default new login();

