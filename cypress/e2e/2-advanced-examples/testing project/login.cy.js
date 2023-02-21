/// <reference types="cypress" />
describe('login',function(){
    beforeEach ("visit quickeats" ,function(){
        cy.visit("https://deliverydev.quickeats.co.uk/login")
    })

it("sign in with invalid email", function(){
cy.get('input[type="email"]').type('zahrawaris1997@gmail.com')
cy.get('input[type="password"]').type('123456l7')
cy.get('[type="checkbox"]').check()
cy.get('.btn').contains('Sign in').should('be.visible').click()
cy.get("span").should('be.visible').should('have.text',"Invalid credentials")
cy.wait(3000)
})
it('sign in with invalid password',function(){
cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com')
cy.get('input[type="password"]').type('123666')
cy.get('[type="checkbox"]').check()
cy.get('.btn').contains('Sign in').should('be.visible').click()
cy.get('span').should('be.visible').should('have.text','Invalid credentials')
cy.wait(3000)
})
it('sign in with incorrect format @',function(){
 cy.get('input[type="email"]').type('zahrawaris1997gmail.com')
 cy.get('input[type="password"]').type(123456)
 cy.get('[type="checkbox"]').check()
 cy.get('.btn').contains('Sign in').should('be.visible').click()
 cy.get('[type="email"]').invoke('prop', 'validationMessage')
      .should('equal', "Please include an '@' in the email address. 'zahrawaris1997gmail.com' is missing an '@'.")
 cy.wait(3000)
})
it('sign in with .dot missing in email',function(){
 cy.get('input[type="email"]').type('zahrawaris1997@gmailcom')
 cy.get('input[type="password"]').type('123456')
 cy.get('[type="checkbox"]').check()
 cy.get('.btn').contains('Sign in').should('be.visible').click()
 cy.get('span').should('be.visible').should('have.text','email must be an email')
 cy.wait(3000)

})
it('sign in invalid gmail and password',function(){
cy.get('input[type="email"]').type('zahrawaris1997@gmail.com')
cy.get('input[type="password"]').type('12548866')
cy.get('[type="checkbox"]').check()
cy.get('.btn').contains('Sign in').should('be.visible').click()
cy.get('span').should('be.visible').should('have.text','Invalid credentials')
cy.wait(3000)
})
it('Sign up without email',function(){
cy.get('input[type="password"]').type('123456')
cy.get('[type="checkbox"]').check()
cy.get('.btn').contains('Sign in').should('be.visible').click()
cy.get('[type="email"]').invoke('prop','validationMessage')
  .should('equal',"Please fill out this field.")
cy.wait(3000)
})
it('Sign up without password',function(){
cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com')
cy.get('[type="checkbox"]').check()
cy.get('.btn').contains('Sign in').should('be.visible').click()
cy.get('[type="password"]').invoke('prop','validationMessage')
  .should('equal','Please fill out this field.')
cy.wait(3000)
})
it('Sign in with correct email & password',function(){
cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com')
cy.get('input[type="password"]').type('123456')
cy.get('[type="checkbox"]').check()
cy.get('.btn').contains('Sign in').should('be.visible').click()
})


})