import home from './index.js';
import login from './index';
const element = require('./elements').ELEMENTS;

describe('Login Feature usando Page objects', () => {

    beforeEach(() => {
        home.accessHomePage();
    })

    it.only('2 - Avançando o rodapé de paginação', () => {
        home.exploringFooterPagination();
    })

    it('2 - ', () => {
        

    })
})