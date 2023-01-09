
//const { contains } = require("cypress/types/jquery")

describe('Order Customer Report', function(){


it('User', function(){
    cy.visit('https://deliverydev.quickeats.co.uk/login')
    cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com').get('[type="password"]').type('123456')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').contains('Sign in').should('be.visible').click().wait(1000)

    cy.get('.main_side > :nth-child(4) > .nav-link').contains('Orders Customer Report').click()
    cy.get('.row > :nth-child(1) > .form-control').select(6)
    cy.get(':nth-child(2) > .v3dp__datepicker > .v3dp__input_wrapper > .form-control').dblclick()
    //cy.get('[class="v3dp__heading"]').contains('January 2023').click({force:true})
    //cy.get('[class="v3dp__heading__center"]').contains('2023').click()
   // cy.get('[class="selected"]').contains('2022').dblclick()
   cy.get('[class="v3dp__heading"]').contains('January 2023').invoke('val').then((text) => {
    expect('09/01/2023').to.equal('09/01/2022');
})
})
})