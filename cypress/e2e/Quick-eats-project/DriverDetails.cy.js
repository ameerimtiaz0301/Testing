/// <reference types="cypress" />
describe('Drivers details and edit a driver', function(){
    beforeEach(()=>{
        cy.viewport("macbook-11")
    })
    it('Login',()=>{
        cy.visit('https://deliverydev.quickeats.co.uk/login')
        cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com').get('[type="password"]').type('123456')
        cy.get('[type="checkbox"]').check()
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
    it('view rider details', ()=>{
        cy.get('.main_side > :nth-child(5) > .nav-link').click().wait(3000)
        cy.get('.form-control').type('ameerimtiaz@gmail.com',{force:true}).scrollIntoView()
        cy.get('.search > :nth-child(3)').contains('Search').dblclick({force:true})
        cy.wait(3000)
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/table/tbody/tr[1]').find('[class="text-start"]').contains('39')
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/table/tbody/tr[1]').find('[class="text-start"]').find('[class="btn-group mr-2"]')
        .find('[class="btn btn-sm btn-info me-2"]').contains('Detail').click({force:true}).wait(3000).go('back')
    })
    it('view rider earnings', ()=>{
        cy.get('.main_side > :nth-child(5) > .nav-link').click().wait(3000)
        cy.get('.form-control').type('ameerimtiaz@gmail.com',{force:true}).scrollIntoView()
        cy.get('.search > :nth-child(3)').contains('Search').dblclick({force:true})
        cy.wait(3000)
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/table/tbody/tr[1]').find('[class="text-start"]').find('[class="btn-group mr-2"]')
        .find('[class="btn btn-sm btn-warning me-2"]').contains('View').click({force:true}).wait(3000).go('back')
    })
    it('Edit Rider details', ()=>{
        cy.get('.main_side > :nth-child(5) > .nav-link').click().wait(3000)
        cy.get('.form-control').type('ameerimtiaz@gmail.com',{force:true}).scrollIntoView()
        cy.get('.search > :nth-child(3)').contains('Search').dblclick({force:true})
        cy.wait(3000)
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/table/tbody/tr[1]').find('[class="text-start"]').find('[class="btn-group mr-2"]')
        .find('[class="btn btn-sm btn-secondary me-2"]').contains('Edit').click({force:true}).wait(3000)
        cy.get(':nth-child(3) > .form-control').clear().type('+923034074618',{force: true})
        cy.get('.btn').contains('Submit').click().wait(3000).go('back')
    })
    it('view Rider Location', ()=>{
        cy.get('.main_side > :nth-child(5) > .nav-link').click().wait(3000)
        cy.get('.form-control').type('ameerimtiaz@gmail.com',{force:true}).scrollIntoView()
        cy.get('.search > :nth-child(3)').contains('Search').dblclick({force:true})
        cy.wait(3000)
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/table/tbody/tr[1]').find('[class="text-start"]').find('[class="btn-group mr-2"]')
        .find('[class="btn btn-sm btn-success me-2"]').contains('Rider Location').click({force:true})
    })
    
})