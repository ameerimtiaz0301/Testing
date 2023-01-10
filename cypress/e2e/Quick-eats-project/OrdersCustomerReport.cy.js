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
        cy.contains("January 2023").xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div/div[4]/div[1]/button[2]').click()
        cy.contains('2022').xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div/div[3]/div[1]/button[2]').click()
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div/div[2]/div[2]/div').contains('2021').click()
        cy.contains('Jul').click()
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div/div[4]/div[2]/div[2]/button[26]').contains('23').click()
    })
//     it('select user name', function(){
//         cy.get(':nth-child(3) > .row > :nth-child(1)').get('.row > :nth-child(1) > .form-control').select()
//      })
})