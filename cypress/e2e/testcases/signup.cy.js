import sign_up_page from "../pages/signupPage.js";

describe("SignUp template", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  })
  it("navigate to Monese.com", () => {
    cy.viewport(Cypress.config().viewport);
    sign_up_page.click_acknowledge_button();
    sign_up_page.click_signup_button();
    cy.end();
  })
})