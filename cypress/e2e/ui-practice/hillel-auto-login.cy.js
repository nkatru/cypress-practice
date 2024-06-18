/// <reference types="cypress" />

describe("Login into the qa-auto web site", () => {
  it("Test 1 - Sign in scenario", () => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
    cy.fixture("creds.json").then((userData) => {
      cy.get("button.btn.header_signin").click();
      cy.get("#signinEmail").type(userData.email);
      cy.get("#signinPassword").type(userData.password);
      cy.contains("Login").click();
      cy.get(".panel-page").should("contain", "Garage");
    });
  });
});
