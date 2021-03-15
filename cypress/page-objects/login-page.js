export class LoginPage {

  usernameField = '#username';
  passwordField = '#password';
  loginButton = '.fa-sign-in';
  statusAlert = '#flash';

  enterUsername(username) {
    cy.get(this.usernameField)
      .clear()
      .type(username);
  }

  enterPassword(password) {
    cy.get(this.passwordField)
      .clear()
      .type(password);
  }

  clickLoginButton() {
    cy.get(this.loginButton)
      .click();
  }

}

