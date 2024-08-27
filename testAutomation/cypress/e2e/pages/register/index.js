const element = require('./elements').ELEMENTS;

class register{

    validateLoginPage(){

        cy.url('/register').then(() => {
            cy.contains('Sign in');
        });
    }

    registerWithValidCredentials(username, email, password){
        cy.get(element.usernameInput)
        .should('have.attr', 'placeholder', 'Your Name')
        .type(username);
        
        cy.get(element.emailInput)
        .should('have.attr', 'type', 'email')
        .and('have.attr', 'placeholder', 'Email')
        .type(email);

        cy.get(element.passwordInput)
        .should('have.attr', 'type', 'password')
        .and('have.attr', 'placeholder', 'Password')
        .type(password).wait(1000);

         return cy.get('.btn').click();
    }
}

export default new register();