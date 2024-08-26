import home from './index.js';
import login from './index';
const element = require('./elements').ELEMENTS;

describe('Explorando a Home Page', () => {

    beforeEach(() => {
        home.accessHomePage();
    })

    it.only('1 - Avançando o rodapé de paginação', () => {
        home.exploringFooterPagination();
    })

    it('2 - Selecionando Popular Tags', () => {
        

    })

    it('3 - Retornando ao Glocal Feed', () => {
        

    })
})