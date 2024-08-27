class user_interactions{

    accessFavoritedArticles(){
        cy.get('ul > li').eq(5).click();
    }

    returnMyArticles(){

    }

    accessFolowers(){

    }



}

export default new user_interactions();