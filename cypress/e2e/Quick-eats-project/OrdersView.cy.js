describe('order view', function () {

    it('Sign in', function () {
        cy.visit('https://deliverydev.quickeats.co.uk/login')
        cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com').get('[type="password"]').type('123456')
        cy.get('[type="checkbox"]').check()
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
    it('Profile', function(){
        cy.get('.sidebar').contains('khan Muhammad').scrollIntoView().click({force: true})
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[1]/form/button').should('be.visible').dblclick()
        cy.get('.sidebar').contains(' Dashbaord').scrollIntoView().click()
    })
    it('live orders', function () {
        cy.get('.sidebar').get('[class="active router-link-exact-active nav-link"]').contains(' Dashbaord').scrollIntoView().click()
        cy.get('[class="fas fa-tachometer-alt pe-2"]').click()
        cy.get('.btn[class="btn mb-2 mb-md-0 btn-primary"]').contains('Live Orders').should('be.visible').click()
        cy.get('td').contains('Accepted')
        cy.get('[class="btn-group mr-2"]')
        cy.xpath('//*[@id="app"]/div/div/div[2]/main/div[2]/div/table/tbody/tr[3]/td[11]/div/a[1]').click({force: true})
        cy.viewport(2099, 3999).wait(3000)
        cy.viewport('macbook-15').wait(3000)
      })
   
    // it('Settings & Rate list view', function () {
    //     cy.get('[id="2"]').click().xpath('//*[@id="app"]/div/div/div[1]/nav/ul/li[8]/ul/li[1]/a').click()
    //     cy.xpath('//*[@id="app"]/div/div/div[2]/main/div/div/div[2]/div/table/tbody/tr[13]/td[11]/div/a[2]').click()
    // })
    // it('Add rate range', function () {
    //     cy.get('[class="d-flex justify-content-between"]').get("h2").contains("Rate Detail")
    //     cy.get('[class="btn btn-sm btn-secondary"]').should('be.visible').contains('Add Rate Range').click()
    //     cy.get("h1").contains("RateRange Create")
    //     cy.get('input[placeholder="Start Range"]').type('2000')
    //     cy.get('input[placeholder="End Range"]').type('5000')
    //     cy.get('input[placeholder="Range Price"]').type('100')
    //     cy.get("select").select("Multiple").invoke("val").should("eq", "Multiple")
//})
 })