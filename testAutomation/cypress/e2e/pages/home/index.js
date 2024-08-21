const element = require('./elements').ELEMENTS;
const elementHeader = require('../superiorMenu/elements').ELEMENTS;

class home{

    accessLoginPage(){
        cy.contains('Login').click().wait(1000);
    }

    accessHomePage(){
        cy.visit('/');
    }

    acessNewArticlePage(){
        cy.contains('New Article')
            .should('have.attr','href','#/editor')
            .click();
    }
}

export default new home();