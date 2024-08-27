class user_interactions{

    accessFavoritedArticles(){
        cy.get('ul > li').eq(5).click();
    }

    returnMyArticles(){
        cy.contains('My Articles').should('be.visible').click();
    }

    accessFolowers(){

    }



}

export default new user_interactions();