/// <reference types="cypress" />

describe("Check that icons contains href attribute", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("Test 1 - Facebook icon should contains a link to the Facebook", () => {
    cy.get('a[href*="facebook"]')
      .invoke("attr", "href")
      .should("contain", "facebook.com");
    cy.log("Current icon is a Facebook");
  });

  it("Test 2 - Telegram icon should contains a link to the Telegram", () => {
    cy.get('a[href*="t.me"]').invoke("attr", "href").should("contain", "t.me");
    cy.log("Current icon is a Telegram");
  });

  it("Test 3 - Instagram icon should contains a link to the Instagram", () => {
    cy.get('a[href*="instagram.com"]')
      .invoke("attr", "href")
      .should("contain", "instagram.com");
    cy.log("Current icon is an Instagram");
  });

  it("Test 4 - Linkedin icon should contains a link to the Linkedin", () => {
    cy.get('a[href*="linkedin.com"]')
      .invoke("attr", "href")
      .should("contain", "linkedin.com");
    cy.log("Current icon is Linkedin");
  });

  it("Test 5 - Youtube icon should contains a link to the Youtube", () => {
    cy.get('a[href*="youtube.com"]')
      .invoke("attr", "href")
      .should("contain", "youtube.com");
    cy.log("Current icon is Youtube");
  });

  it("Test 6 - Login form should be visible, after clicking on the Sign In button", () => {
    cy.get("button.header_signin").click();
    cy.contains(".modal-header", "Log in").should("be.visible");
    cy.log("Login form is opened, after clicking the Sign In button");
  });

  it("Test 7 - Registration form should be visible, after clicking on the Sign Up button", () => {
    cy.get("button.btn-primary").click();
    cy.contains(".modal-header", "Registration").should("be.visible");
    cy.log("Registration form is opened, after clicking the Sign Up button");
  });
});
