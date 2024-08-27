import user_interaction from "./index.js";
import home from '../home/index.js';
import login from '../login/index.js';
const element = require('../login/elements').ELEMENTS;

describe('Explorando perfil de um usuário', () => {

    beforeEach(() => {
        home.accessHomePage();
        home.accessLoginPage();
        login.validateLoginPage();
        login.loginWithValidCredentials('mariaclara@teste.com','Senha@teste');
        home.selectPopularTag();
        home.accessFirstAuthor();
    })

    it('1 - Acessando os Favorited Articles de um usuário', () => {
        user_interaction.accessFavoritedArticles();
        user_interaction.returnMyArticles();
        user_interaction.accessFolowers();
    })

})