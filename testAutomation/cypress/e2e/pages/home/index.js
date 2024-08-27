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
            cy.get('ul > li').eq(8).find('a').click();
        });
        
    }

    selectPopularTag(){
        cy.get('.tag-list > :nth-child(4)')
        .click().wait(500);
        
    }

    accessGlobalFeed(){
        cy.contains('Global Feed')
        .click();
        
    }

    accessFirstAuthor(){
        cy.get('.article-meta .author').eq(1).click();
    }
}

export default new home();