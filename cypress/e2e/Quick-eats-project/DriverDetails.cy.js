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
        cy.get('form > :nth-child(10)').contains('is buzy').get(':nth-child(10) > #flexCheckDefault').scrollIntoView().check()
        cy.get('form > :nth-child(11)').contains('availability').get(':nth-child(11) > #flexCheckDefault').check()
        cy.get('form > :nth-child(12)').contains('Is Active').get(':nth-child(12) > #flexCheckDefault').check()
        cy.get('form > :nth-child(13)').contains('Is Block').get(':nth-child(13) > #flexCheckDefault').check()
        cy.get('.btn').contains('Submit').click().wait(3000).go('back')
    })
    it('view rider details', ()=>{
        cy.get('.main_side > :nth-child(5) > .nav-link').click().wait(3000)
        cy.get('.form-control').type('ameerimtiaz@gmail.com',{force:true}).scrollIntoView()
        cy.get('.search > :nth-child(3)').contains('Search').dblclick({force:true})
        cy.wait(3000)
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/table/tbody/tr[1]').find('[class="text-start"]').find('[class="btn-group mr-2"]')
        .find('[class="btn btn-sm btn-info me-2"]').contains('Detail').click({force:true}).wait(3000).go('back')
    })
    it('view Rider Location', ()=>{
        cy.get('.main_side > :nth-child(5) > .nav-link').click().wait(3000)
        cy.get('.form-control').type('ameerimtiaz@gmail.com',{force:true}).scrollIntoView()
        cy.get('.search > :nth-child(3)').contains('Search').dblclick({force:true})
        cy.wait(3000)
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/table/tbody/tr[1]').find('[class="text-start"]').find('[class="btn-group mr-2"]')
        .find('[class="btn btn-sm btn-success me-2"]').contains('Rider Location').wait(3000)
    })
    it('Go to Live riders page and open rider earning report', ()=>{
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[1]/div/a[1]').contains('Live Riders').click().wait(3000)
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[1]/div/a').contains('Rider Earning Report').click()
    })
    it('Rider Earning report while selecting From Date', function(){
        cy.get(':nth-child(3) > .row > :nth-child(2)').get(':nth-child(2) > .v3dp__datepicker > .v3dp__input_wrapper > .form-control').should('be.visible').click()
        cy.contains("January 2023").xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div/div[4]/div[1]/button[2]').click()
        cy.contains('2022').xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div/div[3]/div[1]/button[2]').click()
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div/div[2]/div[2]/div').contains('2021').click()
        cy.contains('Jul').click()
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div/div[4]/div[2]/div[2]/button[26]').contains('23').click()
    })
    it('Rider Earning report while selecting To Date', function(){
        cy.get(':nth-child(3) > .row > :nth-child(3)').get(':nth-child(3) > .v3dp__datepicker > .v3dp__input_wrapper > .form-control').should('be.visible').click()
        cy.get('[style="--popout-column-definition:repeat(7, 1fr);"]').contains("January 2023")
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[3]/div/div[4]/div[1]/button[2]').click({force: true})
        cy.get(':nth-child(3) > .v3dp__datepicker > [headingformat="LLLL yyyy"] > .v3dp__heading > .v3dp__heading__center').click()
        cy.get('[style="--popout-column-definition:repeat(3, 1fr);"]').contains('2022').click()
        cy.get(':nth-child(3) > .v3dp__datepicker > [headingformat="LLLL yyyy"]').contains('Dec').click()
        cy.get('[style="--popout-column-definition:repeat(7, 1fr);"] > .v3dp__body').contains('23').click()
    })
    
})