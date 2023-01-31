const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,

  e2e: {
    baseUrl: "https://monese.com/gb/en",
    viewport: "macbook-16",
    country_list: ["Germany", "Austria", "Pakistan", "Estonia", "Finland"],
    // country_list: ["Germany"],
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      allureReuseAfterSpec: true,
    },
  },
});
