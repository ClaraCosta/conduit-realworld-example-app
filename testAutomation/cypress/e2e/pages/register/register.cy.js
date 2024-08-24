import home from '../home/index.js';
import register from './index';
const element = require('./elements').ELEMENTS;

describe('Register Feature usando Page objects', () => {

    beforeEach(() => {
        home.accessHomePage();
    })

    it('1 - Registrar usuário com dados válidos', () => {
        home.accessRegisterPage();

        register.registerWithValidCredentials('testname', 'registervalid@email.com','123456aa');
        
      //  cy.contains(element.stringLoginFalhou); 
    })

})

