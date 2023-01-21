import sign_up_page from "../pages/signuppage.js";

beforeEach(() => {
  cy.visit(Cypress.config().baseUrl);
});

describe("Navigation to https://monese.com", () => {
  context("when language:EN and country:GB", () => {
    it("should accept Cookies", () => {
      cy.viewport(Cypress.config().viewport);
      sign_up_page.accept_cookies();
      cy.end();
    });

    it("should save Cookie settings", () => {
      cy.viewport(Cypress.config().viewport);
      sign_up_page.click_save_settings();
      cy.end();
    });

    it("should click SignUp button", () => {
      cy.viewport(Cypress.config().viewport);
      sign_up_page.accept_cookies();
      sign_up_page.click_signup_button(Cypress.config().countryName);
      cy.end();
    });
  });
});
