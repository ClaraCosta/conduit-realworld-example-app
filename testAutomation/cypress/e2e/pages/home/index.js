const element = require('./elements').ELEMENTS;
const elementHeader = require('../superiorMenu/elements').ELEMENTS;

class home{

    accessLoginPage(){
        cy.contains('Login').click().wait(1000);
    }

    accessRegisterPage(){
        cy.contains('Sign up').click().wait(1000);
    }

    accessHomePage(){
        cy.visit('/');
    }

    acessNewArticlePage(){
        cy.contains('New Article')
            .should('have.attr','href','#/editor')
            .click();
    }

    exploringFooterPagination(){
        const timesToClick = 3;

        Array(timesToClick).fill().forEach(() => {
        cy.get('#root > main > div > div.container.page > div > div > ul > li:nth-child(9) > a').click();
        });

        
    }
}

export default new home();