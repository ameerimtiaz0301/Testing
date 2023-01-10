/// <reference types="cypress" />
describe('Order customer report', function(){
    beforeEach(() =>{
        cy.viewport('macbook-11')
    })
    it('Sign in', function () {
        cy.visit('https://deliverydev.quickeats.co.uk/login')
        cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com').get('[type="password"]').type('123456')
        cy.get('[type="checkbox"]').check()
        cy.get('.btn').contains('Sign in').should('be.visible').click()
     })
    it('Order customer report', function(){
        cy.get('.main_side > :nth-child(4) > .nav-link').click()
        cy.get(':nth-child(2) > .v3dp__datepicker > .v3dp__input_wrapper > .form-control').should('be.visible').click()
    })
})