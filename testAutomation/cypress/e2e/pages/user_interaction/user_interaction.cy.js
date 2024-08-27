import user_interaction from "./index.js";
import home from '../home/index.js';
import login from '../login/index.js';
const element = require('../login/elements').ELEMENTS;

describe('Explorando perfil de um usuário', () => {

    beforeEach(() => {
        home.accessHomePage();
    })

    it('1 - Acessando os Favorited Articles de um usuário', () => {
        home.accessLoginPage();
        login.validateLoginPage();
        login.loginWithValidCredentials('mariaclara@teste.com','Senha@teste');
        home.selectPopularTag();
        home.accessFirstAuthor();
        user_interaction.accessFavoritedArticles();
    })
})