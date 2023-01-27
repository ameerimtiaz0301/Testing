export class LoginPage{
    navigate(url){
    cy.visit(url)
    }
    enteremail(email){
    cy.get(email)
    }
    enterpassword(password){
    cy.get(password)
    }
    checkbox(){
    cy.get('[type="checkbox"]').check()
    }
    clicksubmitbutton(){
    cy.get('.btn').contains('Sign in').should('be.visible').click()
    }
}