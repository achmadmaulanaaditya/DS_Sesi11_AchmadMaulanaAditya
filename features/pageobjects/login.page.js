const { $ } = require("@wdio/globals");
const Page = require("./page");

const element = {
  fieldUsername: $("#user-name"),
  fieldPassword: $("#password"),
  buttonLogin: $("#login-button"),
  errorLockedOutUser: (dynamicMessage1) =>
    $(`//h3[text()="${dynamicMessage1}"]`),
  invalidCredentials: (dynamicMessage2) =>
    $(`//h3[text()="${dynamicMessage2}"]`),
};
class LoginPage extends Page {
  async login(username) {
    await element.fieldUsername.waitForDisplayed({ timeout: 2500 });
    await element.fieldUsername.setValue(username);
    await element.fieldPassword.setValue(process.env.PASSWORD_SECRETSAUCE);
    await element.buttonLogin.click();
  }

  async validateLockedOutUserError(dynamicMessage1) {
    await element.errorLockedOutUser(dynamicMessage1).waitForDisplayed({
      timeout: 2500,
    });
    await expect(element.errorLockedOutUser(dynamicMessage1)).toBeDisplayed();
  }

  async validateInvalidCredentials(dynamicMessage2) {
    await expect(element.invalidCredentials(dynamicMessage2)).toBeDisplayed();
  }

  open() {
    return super.open("/");
  }
}

module.exports = new LoginPage();
