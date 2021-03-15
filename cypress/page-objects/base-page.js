export class BasePage {

  navigate(path) {
    cy.visit('/'+ path);
  }

  getPageTitle() {
    return cy.title();
  }

  isEnabled(selector, index){
    cy.get(selector)
      .eq(index)
      .should('be.enabled');
  }

  isDisabled(selector, index){
    cy.get(selector)
      .eq(index)
      .should('be.disabled');
  } 
}