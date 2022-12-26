const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      getCompareSnapshotsPlugin(on, config);
      return config;
    },
  },
  defaultCommandTimeout: 10000,
  projectId: "z1y85u"
});
