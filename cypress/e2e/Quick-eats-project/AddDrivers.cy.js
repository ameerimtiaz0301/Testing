/// <reference types="cypress" />
describe('Drivers page visit and add a driver', function(){
    beforeEach(()=>{
        cy.viewport('macbook-11')
    })
    it('Login',()=>{
        cy.visit('https://deliverydev.quickeats.co.uk/login')
        cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com').get('[type="password"]').type('123456')
        cy.get('[type="checkbox"]').check()
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
    it('Visit drivers page and click on add rider button', ()=>{
        cy.get('.main_side > :nth-child(5) > .nav-link').click()
        cy.get('.pl-3').contains('Add Riders').should('be.visible').click()
        cy.wait(3000)
    })
    it('Add Rider details', function(){
        cy.get(':nth-child(1) > .form-control').type('Ameer Imtiaz',{force: true})
        cy.get(':nth-child(2) > .form-control').type('ameerimtiaz@gmail.com',{force: true})
        cy.get(':nth-child(3) > .form-control').type('03034074618',{force: true})
        cy.get(':nth-child(4) > .form-control').click({force: true}).scrollIntoView().type('1997-09-30')
        cy.get(':nth-child(5) > .form-control').type('54000',{force: true})
        cy.get(':nth-child(6) > .form-control').type('account',{force: true})
        cy.get(':nth-child(7) > .form-control').type('0412586325152321',{force: true})
        cy.get(':nth-child(8) > .form-control').type('222',{force: true})
        cy.get(':nth-child(9) > .form-control').type('abc abc abc abc abc abc',{force: true})
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[2]/form/div[12]').contains('Is Active').get(':nth-child(12) > #flexCheckDefault').check()
        cy.get('select').eq(0).select('Pakistan').should('have.value', '1')
        cy.get('select').eq(1).select('Lahore').should('have.value', '46')
        cy.get('select').eq(2).select('eBike').should('have.value', 'eBike')
        cy.get(':nth-child(17) > .form-control').type('123456')
        cy.get('.btn').contains('Submit').click()
    })
})