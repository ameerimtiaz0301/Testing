describe('Users view functions', function(){
    
    it('Sign in', function(){
        cy.visit('https://deliverydev.quickeats.co.uk/login')
        cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com').get('[type="password"]').type('123456')
        cy.get('[type="checkbox"]').check()
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
    it('users', function(){
        cy.xpath('//*[@id="app"]/div/div/div[1]/nav/ul/li[2]/a').scrollIntoView().should('be.visible').click()
    })
})