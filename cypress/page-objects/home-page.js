export class HomePage {

  formAuthenticationLink = '//a[@href="/login"]';

  clickFormAuthentication() {
    cy.xpath(this.formAuthenticationLink)
      .click();
  }
}

