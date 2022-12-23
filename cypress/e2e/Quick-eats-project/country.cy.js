describe('Settings Page', function () {
    it('Sign in', function () {
       cy.visit('https://deliverydev.quickeats.co.uk/login')
       cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com').get('[type="password"]').type('123456')
       cy.get('[type="checkbox"]').check()
       cy.get('.btn').contains('Sign in').should('be.visible').click() 
    })
    it('Settings & Rate list view', function () {
        cy.get('[id="2"]').click().xpath('//*[@id="app"]/div/div/div[1]/nav/ul/li[8]/ul/li[6]/a').click()
        cy.get('.btn[class="btn btn-sm btn-primary align-self-center"]').contains('Add Country').click()
        
    })
      
      
     
       
        //    cy.get(':nth-child(2) > .form-control').select(1)
        //    cy.get(':nth-child(3) > .form-control').type('15')
        //    cy.get(':nth-child(4) > .form-control').type('25')
        //    cy.get(':nth-child(5) > .form-control').type('15')
        //    cy.get(':nth-child(6) > #flexCheckDefault').check()
        //    cy.get(':nth-child(7) > #flexCheckDefault').check()
        //    cy.get(':nth-child(9) > .form-control').select(2)
        //    cy.get('.btn[class="w-100 btn btn-lg btn-primary"]').contains('Submit').click()
       })
