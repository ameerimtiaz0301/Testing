/// <reference types="cypress" />

describe('Users view functions', function(){
    beforeEach(() => {
        cy.viewport("macbook-11")
    })
    
    it('Sign in', function(){
        cy.visit('https://deliverydev.quickeats.co.uk/login')
        cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com').get('[type="password"]').type('123456')
        cy.get('[type="checkbox"]').check()
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
     it('users', function(){
        cy.get('.main_side > :nth-child(2) > .nav-link').contains('Users').scrollIntoView().should('be.visible').click()
        cy.get('.form-control').type('khanmuhammadmalik@gmail.com')
        cy.get('.search > :nth-child(3)').click()
        cy.get('.clear').click()
        cy.get('.form-control').clear().type('newcutomer@gmail.com')
        cy.get('.search > :nth-child(3)').click({force : true}).wait(3000).get('.btn-group > .btn-primary').contains('Detail').click({force : true})
        cy.wait(3000).go('back')
     })
     it('add user', function(){
        cy.get('[class="btn btn-sm btn-primary align-self-center"]').contains('Add Users').should('be.visible').click()
        cy.get('input[placeholder="Full Name"]').type('Ameer Imtiaz')
        //cy.get("select").select("Personal").invoke("val").should("eq", "Personal")
        cy.get('select').eq(0).select('Personal').should('have.value', 'Personal')
        cy.get('input[placeholder="bussiness name"]').type('ABC')
        cy.get('input[placeholder="Phone"]').type('03034074618')
        cy.get('input[placeholder="Email"]').type('ameerimtiaz4@gmail.com')
        cy.get('select').eq(1).select('Admin').should('have.value', '2')
        cy.get('select').eq(2).select('Pakistan').should('have.value', '1')
        cy.get('input[placeholder="Password"]').type('123123')
        cy.get('input[placeholder="Confirm Password"]').type('123123')
        cy.get('.btn').contains('Submit').should('be.visible').dblclick()
   //      // response is getting failed and cannot create a user need to look at what the reason is
   //      cy.go('back')
     })
   //   it('View Address list', function(){
   //      cy.xpath('//*[@id="app"]/div/div/div[1]/nav/ul/li[14]/a').scrollIntoView().click()
   //      cy.get('div[class="table-responsive"]')
   //      cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/table/tbody/tr[3]/td[7]/a').contains('Asad ur Rehman Dev').click()
   //   })

})
