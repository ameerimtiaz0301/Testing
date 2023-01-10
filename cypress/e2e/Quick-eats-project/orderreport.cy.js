 import { LoginPage } from "../../Pages/Loginpage.cy"
 const loginPage = new LoginPage()
 it('Log in', function () {
     loginPage.navigate('https://deliverydev.quickeats.co.uk/login')
     loginPage.enteremail()
     loginPage.enterpassword()
     loginPage.checkbox()
     loginPage.clicksubmitbutton()
 })

    it('Order User Report', function () {
    cy.get('.main_side > :nth-child(4) > .nav-link').contains('Orders Customer Report').click()
    cy.get('.row > :nth-child(1) > .form-control').select(0)
    cy.get(':nth-child(2) > .v3dp__datepicker > .v3dp__input_wrapper > .form-control').dblclick()
    cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div/div[4]/div[1]').contains('January 2023').click()
    cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div/div[3]').contains('2023').click()
    cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div/div[2]/div[2]/div/button[1]/span').contains('2020').click()
    cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div/div[3]/div[2]/div/button[4]/span').contains('Apr').click()
    cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[2]/div/div[4]/div[2]/div[2]/button[27]/span').contains('25').click()
    cy.get(':nth-child(3) > .v3dp__datepicker > .v3dp__input_wrapper > .form-control').dblclick()
    cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[3]/div/div[3]/div/div[4]/div[2]/div[2]/button[16]/span').click({force: true})
    cy.get('[class="btn btn-sm btn-primary"]').contains('Search').click().wait(1000)
  })
   it('Download PDF Invoice', function () {
   cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[4]/button').contains('Download PDF Invoice').click()
  })

