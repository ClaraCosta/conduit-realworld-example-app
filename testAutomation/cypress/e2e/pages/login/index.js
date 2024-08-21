const element = require('./elements').ELEMENTS;
const elementHeader = require('../superiorMenu/elements').ELEMENTS;

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
        .type(password);

        return cy.get(element.loginButton).contains('Login').click();
    }


}
export default new login();

