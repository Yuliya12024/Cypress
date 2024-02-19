// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-test="username"]').type(email);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();  
});

   // "cy.test1" : "cypress run -- browser-electron --test1",
        // "cy.test2" : "cypress run -- browser-electron --test2",
        // "cy.test3" : "cypress run -- browser-electron --test3"


    // import testData from '../fixtures/test.json'     
    // cy.fixture('user').then(user => {
    // })