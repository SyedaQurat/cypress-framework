/* require("cypress-xpath");
xpath example:  //'//*[contains(text(),"Yes, I’m happy")]';*/

class sign_up_page {
  click_cookie_banner() {
    var acknowledge_cookie_banner_btn =
      ".styles_altCookieBannerContainer__nnRlL button";
    var homepage_banner_title = "div[class^='styles_TitleContainer'] h1";

    cy.on("window:alert", (text) => {
      expect(text).to.contains(
        "Our website cookies help give you a better web experience and keep everything working nicely. You can accept them all below or choose which ones to keep. Find out more in our "
      );
    });
    expect(acknowledge_cookie_banner_btn).to.not.null;
    cy.get(acknowledge_cookie_banner_btn).eq(0).click();
    expect(homepage_banner_title).to.not.null;
    cy.get(homepage_banner_title).should("be.visible");
  }

  click_signup_button(countryName) {
    var sign_up_btn = ".styles_SignUpButton__pw0kf span";
    var country_selection_dropdown = "div[class^='styles_SelectedItem'] span"
    var search_within_country_dropdown = "div[class^='styles_SearchBoxContainer'] input"

    cy.get(sign_up_btn).eq(0).click()
    cy.get(country_selection_dropdown).should("be.visible")
    cy.get(country_selection_dropdown).click()
    cy.get(search_within_country_dropdown).click().type(countryName)
  }
}

export default new sign_up_page();
