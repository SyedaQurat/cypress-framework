const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    defaultCommandTimeout: 5000,

    e2e: {
      baseUrl: 'https://monese.com/gb/en',
      viewport: 'macbook-16',
      countryName: 'Pakistan',
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        },
                 env: {
                     allureReuseAfterSpec: true
                 }
    }
});

