 import { LoginPage } from "../../Pages/Loginpage.cy"
 const loginPage = new LoginPage()
 it('Log in', function () {
     loginPage.navigate('https://deliverydev.quickeats.co.uk/login')
     loginPage.enteremail()
     loginPage.enterpassword()
     loginPage.checkbox()
     loginPage.clicksubmitbutton()

// describe('Order Customer Report', function(){

// it('User', function(){
//     cy.visit('https://deliverydev.quickeats.co.uk/login')
//     cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com').get('[type="password"]').type('123456')
//     cy.get('[type="checkbox"]').check()
//     cy.get('.btn').contains('Sign in').should('be.visible').click().wait(1000)

    cy.get('.main_side > :nth-child(4) > .nav-link').contains('Orders Customer Report').click()
    cy.get('.row > :nth-child(1) > .form-control').select(6)
    cy.get(':nth-child(2) > .v3dp__datepicker > .v3dp__input_wrapper > .form-control').dblclick()
    //cy.get('[class="v3dp__heading"]').contains('January 2023').click({force:true})
    //cy.get('[class="v3dp__heading__center"]').contains('2023').click()
   // cy.get('[class="selected"]').contains('2022').dblclick()
   cy.get('[class="v3dp__heading"]').contains('January 2023').find('input').eq(0)
   .invoke('val').should('eq', '2020-05-01')
})

