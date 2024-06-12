describe('Log in', function(){
    beforeEach(() => {
      cy.viewport("macbook-11")
      cy.visit('https://staging.milkar.com/login')
    })

  it('SignIn with wrong Email', function(){
      cy.get('input[type="email"]').type('imorg3@yopmail.com')
      cy.get('input[type="password"]').type('123654')
      //cy.get('[type="checkbox"]').check()
      cy.get('.btn').contains('Login').should('be.visible').click()
      //cy.get("span").should('be.visible').should('have.text',"User Not Found")
      cy.wait(3000)
      cy.get('.row-gap-0 > .mx-0 > .flex-wrap').click()
  
    })
})