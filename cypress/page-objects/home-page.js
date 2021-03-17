export class HomePage {

  formAuthenticationLink = '//a[@href="/login"]';
  fileUploadLink = '//a[@href="/upload"]';

  clickFormAuthentication() {
    cy.xpath(this.formAuthenticationLink)
      .click();
  }
  
  clickFileUpload() {
    cy.xpath(this.fileUploadLink)
      .click();
  }
}

