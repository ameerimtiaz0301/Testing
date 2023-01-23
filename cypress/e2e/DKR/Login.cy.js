///<reference types="cypress" />
describe('login to Dil ka Rishta Staging Dashboard', ()=>{
    it('Visit Dil ka Rishta website',()=>{
        cy.visit('https://staging.dilkarishta.com/admin/login')
    })
    it('SignIn with wrong Phone number', function(){
        cy.get('input[id="phone_number"]').type('')
        cy.get('input[id="password"]').type('')
        cy.get('.checkbox').click()
        cy.get('.btn').contains('Sign In').should('be.visible').dblclick()
      })
})