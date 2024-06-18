/// <reference types="cypress" />

describe("Checkboxes test scenarios", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
  });

  it("Test 1 - Default value and unchecked conditions for checkboxes", () => {
    cy.get("input[type=checkbox][checked]").should("be.checked");
    cy.log("Checkbox 2 is checked by default");
    cy.get("input[checked]").uncheck();
    cy.get('input[type="checkbox"]').should("not.be.true");
    cy.log("Both checkboxes are unchecked");
  });

  it("Test 2 - Check first checkbox and verify that both are checked", () => {
    cy.get("input[type = checkbox]").check().should("be.checked");
    cy.log("Both checkboxes are checked");
  });
});
