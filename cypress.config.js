const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    env: {
      userstg: 'user_staging',
      userprod: 'user_production',
    },
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 650,
    viewportWidth: 950,
    defaultCommandTimeout: 4500,
    screenshotOnRunFailure: false,
    defaultBrowser: 'chrome',
  },
});
