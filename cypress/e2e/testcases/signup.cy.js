import sign_up_page from "../pages/signupPage.js";

describe("Navigation to https://monese.com", () => {
  before(() => {
    cy.visit(Cypress.config().baseUrl);
  });
  context("when language:EN and country:GB", () => {
    it("should click cookies banner", () => {
      cy.viewport(Cypress.config().viewport);
      sign_up_page.click_cookie_banner();
      sign_up_page.click_signup_button(Cypress.config().countryName);
    });

    // Need to work on adding different 'it' block
    it("should click signup button", () => {

      sign_up_page.click_signup_button(Cypress.config().countryName);
    });
  });
});
