import { BasePage } from "../page-objects/base-page";
import { LoginPage } from "../page-objects/login-page";
import { HomePage } from "../page-objects/home-page";
import { SecureAreaPage } from "../page-objects/secure-area-page";

describe('Form Authentication Tests', () => {
  const basePage = new BasePage();
  const loginPage = new LoginPage();
  const secureAreaPage = new SecureAreaPage();
  const homePage = new HomePage();
  
  before(()=> {
    cy.clearCookies();
  })

  beforeEach(()=> {
    basePage.navigate('');
    homePage.clickFormAuthentication();
    });

  it('should sign-in with correct credentials', ()=>{
    loginPage.enterUsername('tomsmith');
    loginPage.enterPassword('SuperSecretPassword!');
    loginPage.clickLoginButton();
    cy.get(secureAreaPage.statusAlert).contains('You logged into a secure area!');
  })

  it('should not be able to sign-in with an incorrect username', ()=>{
    loginPage.enterUsername('wrongUsername');
    loginPage.enterPassword('SuperSecretPassword!');
    loginPage.clickLoginButton();
    cy.get(secureAreaPage.statusAlert).contains('Your username is invalid!');
  })
    
  it('should not be able to sign-in with an incorrect password', ()=>{
    loginPage.enterUsername('tomsmith');
    loginPage.enterPassword('wrongPassword');
    loginPage.clickLoginButton();
    cy.get(secureAreaPage.statusAlert).contains('Your password is invalid!');
    })
})
