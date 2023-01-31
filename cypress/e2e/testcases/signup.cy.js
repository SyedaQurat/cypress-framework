import sign_up_page from "../pages/signuppage.js";
import locators from "../pages/locators.js";

beforeEach(() => {
  cy.visit(Cypress.config().baseUrl);
});

describe("Navigation to https://monese.com", () => {
  context("when language:EN and country:GB", () => {
    it("should accept and assert Cookies", () => {
      cy.viewport(Cypress.config().viewport);
      sign_up_page.click_cookie_button();
      sign_up_page.assert_cookie_button;
      sign_up_page.assert_homepage_banner_title();
      cy.end();
    });

    it("should save and assert Cookies settings", () => {
      cy.viewport(Cypress.config().viewport);
      sign_up_page.click_manage_settings_button();
      sign_up_page.assert_manage_settings_button();
      sign_up_page.click_save_settings_button();
      sign_up_page.assert_homepage_banner_title();
      cy.end();
    });

    Cypress.config().country_list.forEach((c) => {
      it("should click SignUp button", () => {
        cy.viewport(Cypress.config().viewport);
        sign_up_page.click_cookie_button();
        sign_up_page.click_signup_button(c);
        cy.end();
      });

      it("should click SignUp button on Home Banner", () => {
        cy.viewport(Cypress.config().viewport);
        sign_up_page.click_cookie_button();
        sign_up_page.click_home_banner_signup_button(c);
        cy.end();
      });
    });
  });
});
