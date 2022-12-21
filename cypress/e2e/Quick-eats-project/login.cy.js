describe('Login test cases', function(){
    it('Signin with user name and password', function(){
        cy.visit('https://deliverydev.quickeats.co.uk/login')
        cy.get('input[type="email"]').type('salman@gmail.com')
        cy.get('input[placeholder="Password"]').type('123456456')
        cy.get('input[type="checkbox"]').check().should('be.visible')
        cy.get('.btn').contains('Sign in').click()
    })
    it('Signin with user name', function(){
        cy.visit('https://deliverydev.quickeats.co.uk/login')
        cy.get('input[type="email"]').type('salman@gmail.com')
        cy.get('input[type="checkbox"]').check().should('be.visible')
        cy.get('.btn').contains('Sign in').click()
    })
    it('Signin with password', function(){
        cy.visit('https://deliverydev.quickeats.co.uk/login')
        cy.get('input[placeholder="Password"]').type('123456456')
        cy.get('input[type="checkbox"]').check().should('be.visible')
        cy.get('.btn').contains('Sign in').click()
    })
    it('Signin with correct email and password', function(){
        cy.viewport('ipad-mini').wait(5000)
        cy.visit('https://deliverydev.quickeats.co.uk/login')
        cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com')
        cy.get('input[placeholder="Password"]').type('123456')
        cy.get('input[type="checkbox"]').check().should('be.visible')
        cy.get('.btn').contains('Sign in').click()
})
})