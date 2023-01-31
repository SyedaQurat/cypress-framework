/* require("cypress-xpath");
xpath example:  //'//*[contains(text(),"Yes, I’m happy")]';*/

import locators from "../pages/locators.js";

class sign_up_page {
  click_cookie_button() {
    if (locators.acknowledge_button !== null)
      return cy.get(locators.acknowledge_button).eq(0).click();
    else return "Cookie button is Null";
  }

  assert_cookie_button() {
    expect(locators.acknowledge_button).to.not.null;
  }

  assert_homepage_banner_title() {
    expect(locators.homepage_banner_title).to.not.null;
    cy.get(locators.homepage_banner_title).should("be.visible");
    cy.on("window:alert", (text) => {
      expect(text).to.contains(
        "Our website cookies help give you a better web experience and keep everything working nicely. You can accept them all below or choose which ones to keep. Find out more in our "
      );
    });
  }

  click_manage_settings_button() {
    cy.get(locators.manage_settings_btn).eq(1).click();
  }

  assert_manage_settings_button() {
    expect(locators.manage_settings_btn).to.not.null;
  }
  click_save_settings_button() {
    cy.get(locators.save_settings_btn).eq(10).click();
  }

  click_signup_button() {
    cy.get(locators.sign_up_btn).eq(0).click();
  }
  
  assert_signup_modal(){
    cy.on("window:alert", (text) => {
      expect(text).to.contains(
        "So that you can open the best account for you, start by telling us where you live."
      );
    });
  }

  click_country_dropdown() {
    cy.get(locators.country_selection_dropdown).should("be.visible");
    cy.get(locators.country_selection_dropdown).click();
  }

  enter_and_search_countryname(countryName) {
    cy.get(locators.search_within_country_dropdown).click().type(countryName);
    cy.get(locators.click_searched_country).click();
  }

  click_continue_btn() {
    cy.get(locators.click_continue_btn).click();
  }

  click_homebanner_signup_button() {
    cy.get(locators.homebanner_sign_up_btn).eq(0).click();
   }
}

export default new sign_up_page();
