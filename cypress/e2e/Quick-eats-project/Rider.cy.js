import { LoginPage } from "../../Pages/Loginpage.cy"
 const loginPage = new LoginPage()
 it('Log in', function () {
     loginPage.navigate('https://deliverydev.quickeats.co.uk/login')
     loginPage.enteremail()
     loginPage.enterpassword()
     loginPage.checkbox()
     loginPage.clicksubmitbutton()
 })

    it('Rider Page', function () {
    cy.get('.main_side > :nth-child(5) > .nav-link').click()
    })

    it('Add Rider', function () {
        cy.get('.main_side > :nth-child(5) > .nav-link').click()
        cy.get('.pl-3').click()
        cy.get(':nth-child(1) > .form-control').click({force: true}).type('Test Driver')
        cy.get(':nth-child(2) > .form-control').click({force: true}).type('Testdriver@yopmail.com')
        cy.get(':nth-child(3) > .form-control').click({force: true}).type('03000000000')
        cy.get(':nth-child(4) > .form-control').click({force: true}).type('1996-12-25')
        cy.get(':nth-child(5) > .form-control').click({force: true}).type('37440')
        cy.get(':nth-child(6) > .form-control').click({force: true}).type('Testing Name')
        cy.get(':nth-child(7) > .form-control').click({force: true}).type('069416181918')
        cy.get(':nth-child(8) > .form-control').click({force: true}).type('37440')
        cy.get(':nth-child(9) > .form-control').click({force: true}).type('No Specific Details')
        cy.get(':nth-child(12) > #flexCheckDefault').click()
        cy.get(':nth-child(14) > .form-control').select(0)
        cy.get(':nth-child(15) > .form-control').select(0)
        cy.get(':nth-child(16) > .form-control').select(0)
        cy.get(':nth-child(17) > .form-control').click({froce:true}).type('123456')
        cy.get('.w-100').contains('Submit').click().wait(1000)
     })
     it('View Created Rider3', function () {
        cy.get('.form-control').contains('Search').dblclick({force: true})
     })