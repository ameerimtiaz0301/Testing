describe('Log in', function(){
    beforeEach(() => {
      cy.visit('https://deliverydev.quickeats.co.uk/login')
    })

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
    })
  it('SignIn with wrong Password', function(){
     cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com')
     cy.get('input[type="password"]').type('12345678')
     cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
  it('SignIn with wrong Email and Password', function(){
     cy.get('input[type="email"]').type('khanmuhammad@gmail.com')
     cy.get('input[type="password"]').type('12345678')
     cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
  it('SignIn with out Email', function(){
    cy.get('input[type="password"]').type('123456')
     cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
  it('SignIn with out Password', function(){
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