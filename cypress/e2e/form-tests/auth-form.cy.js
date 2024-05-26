/// <reference types="cypress" />

const defaultUsername = 'tomsmith';
const defaultPassword = 'SuperSecretPassword!';
let invalidPassword = 'randomText13232!';
let invalidUsername = 'randomUser23242!';

describe('Negative login scenarios', () => {
    beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
    })

    it('Login with invalid password', () => {
        cy.get('#username').type(defaultUsername);
        cy.get('#password').type(`${invalidPassword}'{enter}`);
        cy.get('#flash.error').should("be.visible");
    } )

    it('Login with invalid userName', () => {
        cy.get('#username').type(invalidUsername);
        cy.get('#password').type(defaultPassword);
        cy.get("button[type='submit']").click();
        cy.get('#flash.error').should("be.visible");
    } )
})