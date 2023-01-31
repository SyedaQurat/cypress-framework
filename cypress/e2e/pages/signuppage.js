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
  click_save_settings_button(){
    cy.get(locators.save_settings_btn).eq(10).click();
  }

  click_signup_button(countryName) {
    var sign_up_btn = ".styles_SignUpButton__pw0kf span";
    var country_selection_dropdown = "div[class^='styles_SelectedItem'] span";
    var search_within_country_dropdown =
      "div[class^='styles_SearchBoxContainer'] input";
    var click_searched_country = "div[class^='styles_ListItem'] span";
    var click_continue_btn = "span[class^='styles_DesktopFormButton'] button";

    cy.get(sign_up_btn).eq(0).click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains(
        "So that you can open the best account for you, start by telling us where you live."
      );
    });
    cy.get(country_selection_dropdown).should("be.visible");
    cy.get(country_selection_dropdown).click();
    cy.get(search_within_country_dropdown).click().type(countryName);
    cy.get(click_searched_country).click();
    cy.get(click_continue_btn).click();

    cy.on("window:alert", (text) => {
      expect(text).to.contains("We're sorry...");
    });
  }

  click_home_banner_signup_button(countryName) {
    var sign_up_btn = "div[class^='SignupIcons_SignupIconsContainer'] div";
    var country_selection_dropdown = "div[class^='styles_SelectedItem'] span";
    var search_within_country_dropdown =
      "div[class^='styles_SearchBoxContainer'] input";
    var click_searched_country = "div[class^='styles_ListItem'] span";
    var click_continue_btn = "span[class^='styles_DesktopFormButton'] button";

    cy.get(sign_up_btn).eq(0).click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains(
        "So that you can open the best account for you, start by telling us where you live."
      );
    });
    cy.get(country_selection_dropdown).should("be.visible");
    cy.get(country_selection_dropdown).click();
    cy.get(search_within_country_dropdown).click().type(countryName);
    cy.get(click_searched_country).click();
    cy.get(click_continue_btn).click();

    cy.on("window:alert", (text) => {
      expect(text).to.contains("We're sorry...");
    });
  }
}

export default new sign_up_page();
