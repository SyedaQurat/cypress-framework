require("cypress-xpath");

class sign_up_page {
  click_acknowledge_button() {
    var acknowledge_button = '//*[contains(text(),"Yes, I’m happy")]';
    var homepage_banner_title = "The peace-of-mind money app";
    cy.xpath(acknowledge_button).click();

        // Assertions added //
    cy.contains('.styles_CookieBannerContainer___oXGs.styles_altCookieBannerContainer__nnRlL').to;
    expect(homepage_banner_title).to.not.null;
  }

  click_signup_button() {
    //var sign_up_button = '//*[contains(text(),"Sign up")]'
    var sign_up_button = '//*[contains(@class,"styles_SignUpButton__pw0kf")]';
    cy.xpath(sign_up_button).click();
  }
}

export default new sign_up_page();
