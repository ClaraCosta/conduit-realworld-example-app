import home from '../home/index.js';
import login from './index';
const element = require('./elements').ELEMENTS;

describe('Login Feature usando Page objects', () => {

    beforeEach(() => {
        home.accessHomePage();
    })

    it('1 - Fazer login usando credenciais inválidas', () => {
        home.accessLoginPage();
        login.validateLoginPage();

        cy.intercept('POST', 'api/users/login').as('postLogin');

        login.loginWithInvalidCredentials('clara.mc@test.com','123456');
            
        cy.wait('@postLogin').its('response.statusCode').should('eq',404);
        cy.contains(element.stringEmailNotFound);
    })
})

