export class LoginPage{
    navigate(url){
    cy.visit(url)
    }
    enteremail(){
    cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com')
    }
    enterpassword(){
    cy.get('[type="password"]').type('123456')
    }
    checkbox(){
    cy.get('[type="checkbox"]').check()
    }
    clicksubmitbutton(){
    cy.get('.btn').contains('Sign in').should('be.visible').click()
    }
}