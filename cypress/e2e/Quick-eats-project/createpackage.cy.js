import { LoginPage } from "../../Pages/Loginpage.cy"
const loginPage = new LoginPage()
it('Log in', function () {
    loginPage.navigate('https://deliverydev.quickeats.co.uk/login')
    loginPage.enteremail()
    loginPage.enterpassword()
    loginPage.checkbox()
    loginPage.clicksubmitbutton()
})
it('Create Package', function () {
cy.get('[id="2"]').click({force: true}).xpath('//*[@id="app"]/div/div/div[1]/nav/ul/li[8]/ul/li[2]/a').click()
//cy.get('.show > :nth-child(2) > .nav-link').click()
cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[2]/div/a').contains('Add Package').click()
cy.xpath('//*[@id="app"]/div/div/div[2]/main/main/form/div[1]/input').click().type('Testing')
cy.xpath('//*[@id="app"]/div/div/div[2]/main/main/form/div[2]/input').click().type('Testinglabel')
cy.xpath('//*[@id="app"]/div/div/div[2]/main/main/form/div[3]/input').click().type('Testingdetail')
cy.xpath('//*[@id="app"]/div/div/div[2]/main/main/form/div[4]/div/label').selectFile("C:/Users/salman-pc/Pictures/Pictures/download.jpg") 
cy.xpath('//*[@id="app"]/div/div/div[2]/main/main/form/div[5]/input').click().type('250')
cy.xpath('//*[@id="app"]/div/div/div[2]/main/main/form/div[6]/select').select(0)
cy.get('.w-100').contains('Submit').should('be.visible').click().wait(2000)
})