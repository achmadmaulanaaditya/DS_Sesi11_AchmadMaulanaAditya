require("dotenv/config");

exports.config = {
  runner: "local",
  specs: ["./features/**/*.feature"],
  maxInstances: 2,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
    },
    {
      maxInstances: 1,
      browserName: "firefox",
    },
  ],
  baseUrl: "https://www.saucedemo.com",
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "error",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["devtools"],
  framework: "cucumber",
  reporters: [["allure", { outputDir: "allure-results" }]],
  cucumberOpts: {
    require: ["./features/step-definitions/steps.js"],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    name: [],
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};
