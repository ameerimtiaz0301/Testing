describe('Settings Page', function () {
 it('Sign in', function () {
    cy.visit('https://deliverydev.quickeats.co.uk/login')
    cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com').get('[type="password"]').type('123456')
    cy.get('[type="checkbox"]').check()
    cy.get('.btn').contains('Sign in').should('be.visible').click() 
 })
 it('Settings & Rate list view', function () {
        cy.get('[id="2"]').click().xpath('//*[@id="app"]/div/div/div[1]/nav/ul/li[8]/ul/li[1]/a').click()
       // cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[2]/div/table/tbody/tr[13]/td[11]/div/a[2]').click()
        cy.get('.btn[class="btn btn-sm btn-primary align-self-center"]').contains('Add Rate').click()
        cy.get(':nth-child(2) > .form-control').select(1)
        cy.get(':nth-child(3) > .form-control').type('15')
        cy.get(':nth-child(4) > .form-control').type('25')
        cy.get(':nth-child(5) > .form-control').type('15')
        cy.get(':nth-child(6) > #flexCheckDefault').check()
        cy.get(':nth-child(7) > #flexCheckDefault').check()
        cy.get(':nth-child(9) > .form-control').select(1)
        cy.get('.btn[class="w-100 btn btn-lg btn-primary"]').contains('Submit').click()
        cy.go('back').wait(3000)
    })
    it('Add Rate Range in Add Rate', function () {
        cy.get('.btn[class="btn btn-sm btn-primary me-2"]').contains('View').should('be.visible').click({force: true}).wait(2000)
        cy.get('.btn[class="btn btn-sm btn-secondary"]').contains('Add Rate Range').should('be.visible').click({force: true}).wait(1000)
        cy.get('input[placeholder="Start Range"]').type('4')
        cy.get('input[placeholder="End Range"]').type('5')
        cy.get('input[placeholder="Range Price"]').type('6')
        cy.get(':nth-child(5) > .form-control').select(0)
        cy.get('.btn[class="w-100 btn btn-lg btn-primary"]').contains('Submit').click().wait(2000)

        cy.get(':nth-child(6) > .btn-group > .btn-secondary').contains('Edit').should('be.visible').click()
        cy.get('input[placeholder="Range Price"]').should('have.value','6.00').clear().type('7')
       // cy.get(':nth-child(5) > .form-control').select(1,{ force: true }).wait(1000)
        cy.get('.btn[class="w-100 btn btn-lg btn-primary"]').contains('Submit').click({ force: true })
        cy.get(':nth-child(11) > .btn-group > .btn-danger').click()
       
})
})