require('cypress-xpath');

class sign_up_page {
click_acknowledge_button() {
       var acknowledge_button ='//*[contains(text(),"Yes, I’m happy")]'
       cy.xpath(acknowledge_button).click()
   }

click_signup_button() {
        //var sign_up_button = '//*[contains(text(),"Sign up")]'
        var sign_up_button = '//*[contains(@class,"styles_SignUpButton__pw0kf")]'
        cy.xpath(sign_up_button).click()
      }
}

export default new sign_up_page();