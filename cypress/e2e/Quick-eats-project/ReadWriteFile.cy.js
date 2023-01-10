/// <reference types="cypress" />
describe('Read and write a file', function(){
    it('Write a file', function(){
        cy.writeFile('cypress.txt','Testing the text format which also include ')
        cy.writeFile('cypress.txt','Second part of the txt and \n',{flag: 'a+'})
        cy.writeFile('cypress.txt','Adding an array \n',{flag: 'a+'} )
        cy.writeFile('cypress.txt',['cyp1','cyp2','cyp3','cyp4'],{flag: 'a+'})

        cy.writeFile('cypressj.json',{name:'Ameer Imtiaz', email:'ameerimtiaz4@gmail.com', name:'Ameer Mugahl', email:'ameermughal0301@gmail.com'})
    })
    it('Read a file',function(){
        cy.readFile('cypress.txt').then(function(value){
            cy.log(value)
        })
        // cy.readFile('cypressj.json').then(function(value){
        //     cy.log(value)
        // })
    })
})