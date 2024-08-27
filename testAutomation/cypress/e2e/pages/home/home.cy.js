import home from './index.js';
import login from './index';
const element = require('./elements').ELEMENTS;

describe('Explorando a Home Page', () => {

    beforeEach(() => {
        home.accessHomePage();
    })

    it('1 - Avançando o rodapé de paginação', () => {
        home.exploringFooterPagination();
    })

    it('2 - Retornando ao Global Feed', () => {
        home.selectPopularTag();
        home.accessGlobalFeed();
    })

    it('3 - Acessando o perfil da primeira pessoa do Global Feed', () => {
        home.accessFirstAuthor();
    })

})