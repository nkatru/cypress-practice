/// <reference types="cypress" />

describe("Dropdown test scenarios", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/dropdown");
    cy.get("select#dropdown").click;
  });

  it("Test 1 - Check the default value for the dropdown", () => {
    cy.get("option[disabled]").contains("Please select an option");
    cy.log('Dropdown default value is "Please select an option"');
  });

  it("Test 2 - Check that Option 2 exist it the dropdown", () => {
    cy.get("option[value = '2']").contains("Option 2");
    cy.log("Current value is Option 2");
  });
});
