import home from '../home/index.js';
import login from './index';
const element = require('./elements').ELEMENTS;

describe('Login com dados válidos e inválidos', () => {

    beforeEach(() => {
        home.accessHomePage();
    })

    it('1 - Fazer login usando credenciais inválidas', () => {
        home.accessLoginPage();
        login.validateLoginPage();

        cy.intercept('POST', 'api/users/login').as('postLogin');

        login.loginWithInvalidCredentials('clara.mc@test.com','123456');
        
        cy.contains(element.stringEmailNotFound); 
    })

    it('2 - Fazer login usando credenciais válidas', () => {
        home.accessLoginPage();
        login.validateLoginPage();

        cy.intercept('POST', 'api/users/login').as('postLogin');

        login.loginWithValidCredentials('mariaclara@teste.com','Senha@teste');
        
        cy.contains(element.linkTextNewArticle); 

    })
})

