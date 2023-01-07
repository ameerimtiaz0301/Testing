//import "cypress-real-events/support"
describe('Log in', function(){
  // context('Cookies', () => {
  // beforeEach(() => {
  //   Cypress.Cookies.debug(true) 
  //   cy.visit('https://deliverydev.quickeats.co.uk/login')
  //   cy.clearCookies()
  //   })

  it('SignIn with check box', function(){
    cy.get('input[type="email"]').type('ameermughal0301@gmail.com').get('input[placeholder="Password"]').type('123456')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn[type="submit"]').click()
    })
  it('SignIn with wrong Email', function(){
    cy.get('input[type="email"]').type('khudidevices@gmail.com')
    cy.get('input[type="password"]').type('123456')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').contains('Sign in').should('be.visible').click()
    cy.get('span').should('have.text', "User Not Found").wait(3000)
    })
  it('SignIn with wrong Password', function(){
     cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com')
     cy.get('input[type="password"]').type('12345678')
     cy.get('.btn').contains('Sign in').should('be.visible').click()
     cy.get('span').should('have.text',"Invalid credentials").wait(5000)
    })
  it('SignIn with wrong Email and Password', function(){
     cy.get('input[type="email"]').type('khanmuhammad@gmail.com')
     cy.get('input[type="password"]').type('12345678')
     cy.get('.btn').contains('Sign in').should('be.visible').click()
     cy.get('span').should('have.text',"User Not Found").wait(3000)
    })
  it('SignIn without Email', function(){
    cy.get('input[type="password"]').type('123456')
     cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
  it('SignIn without Password', function(){
      cy.get('input[type="email"]').type('khanmuammadmalik@gmail.com')
      cy.get('.btn').contains('Sign in').should('be.visible').click()

      })
  it('SignIn with correct email & password', function(){
      cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com')
      cy.get('input[type="password"]').type('123456')
      cy.get('[type="checkbox"]').check()
      cy.get('.btn').contains('Sign in').should('be.visible').click()
      
      })
    })
  //})