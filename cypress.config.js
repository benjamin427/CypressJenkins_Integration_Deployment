const { defineConfig } = require("cypress");
const createBuilder = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberpreprocessor = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const build = createBuilder({
        plugins: [createEsbuildPlugin(config)]
      })
      on('file:preprocessor', build)
      addCucumberpreprocessor(on, config)
      return config;
    },
    specPattern: "**/*.feature",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/report",
      html: false,
      json: true,
      overwrite: false
    }
  },
});
