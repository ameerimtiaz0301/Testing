describe('Users Search > Detail > Add User functions', function(){
    
    it('User', function(){
        cy.visit('https://deliverydev.quickeats.co.uk/login')
        cy.get('input[type="email"]').type('khanmuhammadmalik@gmail.com').get('[type="password"]').type('123456')
        cy.get('[type="checkbox"]').check()
        cy.get('.btn').contains('Sign in').should('be.visible').click().wait(2000)
//     })
//    it('users', function(){
 // cy.xpath('//*[@id="app"]/div/div/div[1]/nav/ul/li[2]/a').click()
        cy.get('.main_side > :nth-child(2) > .nav-link').click()
    cy.get('input[type="text"]').type('khanmuhammadmalik@gmail.com', {force: true})
    //cy.get('input[placeholder="Search with Name,Email,Phone,Bussiness name"]').type('newcutomer@gmail.com',{force: true})
    cy.get('[class="btn btn-primary"]').contains('Search').dblclick({force: true})
    cy.get('.btn-group > .btn-primary').click({force: true}).wait(4000)
    cy.get('.d-flex > .btn').contains('Add').dblclick({force: true})
    cy.get(':nth-child(1) > .form-control').click({force: true}).type('Khudi Devices')
    cy.get(':nth-child(2) > .form-control').select(1)
    cy.get(':nth-child(3) > .form-control').click({force: true}).type('khudi')
    cy.get(':nth-child(4) > .form-control').click({force: true}).type('12345678911')
    cy.get(':nth-child(5) > .form-control').click({force: true}).type('khudidevices@gmail.com')
    cy.get(':nth-child(6) > .form-control').select(1)
    cy.get(':nth-child(7) > .form-control').select(1)
    cy.get(':nth-child(8) > .form-control').click({force: true}).type('123456')
    cy.get(':nth-child(9) > .form-control').click({force: true}).type('123456')
    cy.get('.w-100').contains('Submit').dblclick({force: true})

 })
})