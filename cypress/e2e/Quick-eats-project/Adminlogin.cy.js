describe('Log in', function(){
    beforeEach(() => {
      cy.visit('https://deliverydev.quickeats.co.uk/login')
    })

  it('SignIn with wrong Email', function(){
    cy.get('input[type="email"]').type('khudidevices@gmail.com')
    cy.get('input[type="password"]').type('123456')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').contains('Sign in').should('be.visible').click()
    cy.get("span").should('be.visible').should('have.text',"User Not Found")
    cy.wait(3000)
    })
  it('SignIn with wrong Password', function(){
     cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com')
     cy.get('input[type="password"]').type('12345678')
     cy.get('.btn').contains('Sign in').should('be.visible').click()
     cy.get("span").should('be.visible').should('have.text',"Invalid credentials")
    cy.wait(3000)
    })
  it('SignIn with wrong Email and Password', function(){
     cy.get('input[type="email"]').type('khanmuhammad@gmail.com')
     cy.get('input[type="password"]').type('12345678')
     cy.get('.btn').contains('Sign in').should('be.visible').click()
     cy.get("span").should('be.visible').should('have.text',"User Not Found")
     cy.wait(3000)
    })
  it('SignIn with out Email', function(){
    cy.get('input[type="password"]').type('123456')
    cy.get('.btn').contains('Sign in').should('be.visible').click()
    cy.wait(3000)
    })
  it('SignIn with out Password', function(){
      cy.get('input[type="email"]').type('khanmuammadmalik@gmail.com')
      cy.get('.btn').contains('Sign in').should('be.visible').click()
      cy.wait(3000)
      })
  it('SignIn with correct email & password', function(){
      cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com')
      cy.get('input[type="password"]').type('123456')
      cy.get('[type="checkbox"]').check()
      cy.get('.btn').contains('Sign in').should('be.visible').click()
      })
    })